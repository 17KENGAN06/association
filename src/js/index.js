import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	spaceBetween: 57,

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },
	breakpoints: {
		1400: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		920: {
			slidesPerView: 3,
		},
		520: {
			slidesPerView: 2,
			spaceBetween: 7,
		},
	},
})

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js'
mobileNav()

import nav from './modules/nav.js'
nav()
