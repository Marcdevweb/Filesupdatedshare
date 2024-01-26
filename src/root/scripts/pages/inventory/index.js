export function inventory() {
  return {
    activeBrand: 'all',
    resetScroll() {
      window.scrollTo({ top: 350, behavior: 'smooth' })
      return false
    }
  }
}