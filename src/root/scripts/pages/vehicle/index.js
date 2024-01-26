export function vehicle() {
  return {
    activeSection: 'overview',
    activeTab: 'cash',
    activeOption: 'standard',
    toggleTabs(e) {
      const target = e.target.getAttribute('data-tab')
      this.activeTab = target
    },
    initScrollAnchors() {
      document
        .querySelectorAll('.scroll-link[href^="#"]')
        .forEach((trigger) => {
          trigger.onclick = function (e) {
            e.preventDefault()
            let hash = this.getAttribute('href')
            let target = document.querySelector(hash)
            let headerOffset = 100
            let elementPosition = target.offsetTop
            let offsetPosition = elementPosition - headerOffset

            window.scrollTo({
              top: offsetPosition + 50,
              behavior: 'smooth',
            })
          }
        })
    },
  }
}
