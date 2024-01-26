const demos = [
  {
    name: 'Home',
    screenshotLight: '/img/screenshots/home.png',
    screenshotDark: '/img/screenshots/home-dark.png',
    link: '/home.html',
    new: false,
  },
  {
    name: 'Home 2',
    screenshotLight: '/img/screenshots/home-2.png',
    screenshotDark: '/img/screenshots/home-2-dark.png',
    link: '/home-2.html',
    new: false,
  },
  {
    name: 'Home 3',
    screenshotLight: '/img/screenshots/home-3.png',
    screenshotDark: '/img/screenshots/home-3-dark.png',
    link: '/home-3.html',
    new: false,
  },
  {
    name: 'Inventory',
    screenshotLight: '/img/screenshots/inventory.png',
    screenshotDark: '/img/screenshots/inventory-dark.png',
    link: '/inventory.html',
    new: false,
  },
  {
    name: 'Vehicle',
    screenshotLight: '/img/screenshots/vehicle.png',
    screenshotDark: '/img/screenshots/vehicle-dark.png',
    link: '/vehicle.html',
    new: false,
  },
  {
    name: 'Services',
    screenshotLight: '/img/screenshots/services.png',
    screenshotDark: '/img/screenshots/services-dark.png',
    link: '/services.html',
    new: false,
  },
  {
    name: 'About Us',
    screenshotLight: '/img/screenshots/about.png',
    screenshotDark: '/img/screenshots/about-dark.png',
    link: '/about.html',
    new: false,
  },
  {
    name: 'Contact',
    screenshotLight: '/img/screenshots/contact.png',
    screenshotDark: '/img/screenshots/contact-dark.png',
    link: '/contact.html',
    new: false,
  },
  {
    name: 'Dashboard',
    screenshotLight: '/img/screenshots/dashboard.png',
    screenshotDark: '/img/screenshots/dashboard-dark.png',
    link: '/dashboard.html',
    new: false,
  },
  {
    name: 'Account',
    screenshotLight: '/img/screenshots/dashboard-account.png',
    screenshotDark: '/img/screenshots/dashboard-account-dark.png',
    link: '/dashboard-account.html',
    new: false,
  },
  {
    name: 'Schedule',
    screenshotLight: '/img/screenshots/dashboard-schedule.png',
    screenshotDark: '/img/screenshots/dashboard-schedule-dark.png',
    link: '/dashboard-schedule.html',
    new: false,
  },
  {
    name: 'Favorites',
    screenshotLight: '/img/screenshots/dashboard-bookmarks.png',
    screenshotDark: '/img/screenshots/dashboard-bookmarks-dark.png',
    link: '/dashboard-bookmarks.html',
    new: false,
  },
  {
    name: 'Error 404',
    screenshotLight: '/img/screenshots/404.png',
    screenshotDark: '/img/screenshots/404-dark.png',
    link: '/404.html',
    new: false,
  },
  {
    name: 'Login',
    screenshotLight: '/img/screenshots/login.png',
    screenshotDark: '/img/screenshots/login-dark.png',
    link: '/login.html',
    new: false,
  },
  {
    name: 'Signup',
    screenshotLight: '/img/screenshots/signup.png',
    screenshotDark: '/img/screenshots/signup-dark.png',
    link: '/signup.html',
    new: false,
  },
]

export function renderScreenshots() {
  return {
    screenshots: demos,
  }
}
