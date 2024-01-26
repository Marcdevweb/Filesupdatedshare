export function insertBgImages() {
  const targets = document.querySelectorAll('[data-background]')

  if (typeof targets != 'undefined' && targets != null) {
    for (var i = 0, len = targets.length; i < len; i++) {
      let bgUrl = targets[i].getAttribute('data-background')
      targets[i].style.backgroundSize = 'cover'
      targets[i].style.backgroundRepeat = 'no-repeat'
      targets[i].style.backgroundImage = `url(${bgUrl})`
    }
  }
}
