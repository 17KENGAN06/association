import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
	slidesPerView: 6,
	spaceBetween: 57,
	centeredSlides: true,
	loop: true,
	slidesPerGroup: 1,
	paginationClickable: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		820: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
	},
})

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js'
mobileNav()

import nav from './modules/nav.js'
nav()
