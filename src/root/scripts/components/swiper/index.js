// import Swiper JS
import Swiper from 'swiper'

function getSlideDataIndex(swipe) {
  var activeIndex = swipe.activeIndex
  var slidesLen = swipe.slides.length
  if (swipe.params.loop) {
    switch (swipe.activeIndex) {
      case 0:
        activeIndex = slidesLen - 3
        break
      case slidesLen - 1:
        activeIndex = 0
        break
      default:
        --activeIndex
    }
  }
  return activeIndex
}

export function swiperHero() {
  return {
    swiper: null,
    currentSlide: null,
    init() {
      this.swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.carousel-pagination',
          type: 'bullets',
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        onSlideChangeEnd: function (swipe) {
          console.log(getSlideDataIndex(swipe))
        },
      })
    },
    swiperNext() {
      if (this.swiper !== undefined) {
        this.swiper.slideNext()
      }
    },
    swiperPrev() {
      if (this.swiper !== undefined) {
        this.swiper.slidePrev()
      }
    },
  }
}
