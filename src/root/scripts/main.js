import '@purge-icons/generated'
import 'vidstack/define/media-player.js';
import 'swiper/css/bundle'
//Alpine and plugins import
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import Tooltip from '@ryangjchandler/alpine-tooltip'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged } from "firebase/auth";

import './demo'
import './components'
import './pages'
import { insertBgImages } from './utils/bg'

const firebaseConfig = {
  apiKey: "AIzaSyDKajgryV52sAH66jJft9nerWjCiwMGWi4",
  authDomain: "skiboulder-fe1e2.firebaseapp.com",
  projectId: "skiboulder-fe1e2",
  storageBucket: "skiboulder-fe1e2.appspot.com",
  messagingSenderId: "342774822374",
  appId: "1:342774822374:web:4b0b01dd140c1727af9227",
  measurementId: "G-G763MFS4ND"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
window.firebase = app;

window.provider = new GoogleAuthProvider();
window.auth = getAuth();
window.signInWithPopup = signInWithPopup;
window.onAuthStateChanged = onAuthStateChanged;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;

window.Alpine = Alpine
//Init intersect plugin
Alpine.plugin(intersect)
//Init collapse plugin
Alpine.plugin(collapse)
//Init persist plugin
Alpine.plugin(persist)
//Init tooltip plugin
Alpine.plugin(Tooltip)
//Init Alpine store
Alpine.store('app', {
  init() {
    this.isDark = window.matchMedia('(prefers-color-scheme: light)').matches
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      this.displayName = user.displayName;
      this.currentUser = user;
      console.log(this.displayName)
    });
  },
  isDark: Alpine.$persist(false),
  activeApp: Alpine.$persist('dashboard'),
  isSidebarActive: false,
  isSidebarMobileActive: false,
  currentUser: null,
  displayName: null,
  openingPopup: false
})
//Start Alpine
Alpine.start()
document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    // Replace bg images
    insertBgImages()
  }
}

