export function formStyles() {
    return {
      inputs: `
        pl-10
        pr-3
        py-2
        h-10
        text-sm
        leading-5
        font-sans
        w-full
        bg-white
        text-muted-600
        border border-muted-300
        focus-visible:border-muted-300
        focus-visible:shadow-lg
        focus-visible:shadow-muted-300/50
        dark:focus-visible:shadow-muted-800/50
        placeholder:text-muted-300
        dark:placeholder:text-muted-500
        dark:bg-muted-800
        dark:text-muted-200
        dark:border-muted-700
        dark:focus-visible:border-muted-600
        focus-visible:ring-0
        outline-transparent
        focus-visible:outline-2
        focus-visible:outline-dashed
        focus-visible:outline-muted-300
        dark:focus-visible:outline-muted-600
        focus-visible:outline-offset-2
        transition-all
        duration-300
      `.replace(/\s+/g, ' ').trim(),  // to replace multiple spaces and newlines with single spaces and remove spaces from start/end
      inputIcon: `
        absolute
        top-0
        left-0
        h-10
        w-10
        flex
        justify-center
        items-center
        text-muted-400
        group-focus-within:text-primary-500
        transition-colors
        duration-300`.replace(/\s+/g, ' ').trim(),
      flowBiteA: `
      block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
      `.replace(/\s+/g, ' ').trim(),
      flowBiteB: `peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`.replace(/\s+/g, ' ').trim()
  }
  }
