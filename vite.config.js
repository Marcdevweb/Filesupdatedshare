// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import fastglob from 'fast-glob'
import handlebars from 'vite-plugin-handlebars'
import icons from 'vite-plugin-purge-icons'

const rootPath = 'src/root'

function getHtmlFiles() {
  const htmlFiles = fastglob.sync([`${rootPath}/**/*.html`])

  return htmlFiles.reduce((acc, path) => {
    const slug = path
      .replace(`${rootPath}/`, '')
      .replace('.html', '')
      .replace('/', '-')
      .toLowerCase()

    acc[slug] = path

    return acc
  }, {})
}

export default defineConfig({
  root: resolve(__dirname, rootPath),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlFiles(),

      /**
       * Uncomment this section to build the demo with missing images
       * Don't forget to remove this section when you replaced assets with yours
       */
      // external: [
      //   /\/demo\/.*/,
      // ],
    },
  },
  plugins: [
    /**
     * vite-plugin-handlebars plugin allow partials includes
     *
     * @see https://github.com/alexlafroscia/vite-plugin-handlebars
     */
    handlebars({
      partialDirectory: [
        resolve(__dirname, 'src/partials'),
        resolve(__dirname, 'src/layouts'),
      ],
      reloadOnPartialChange: false,
    }),

    /**
     * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
     *
     * @see https://icones.netlify.app/
     * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
     */
    icons(),
  ],
})
