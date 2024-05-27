const membership = document.querySelector('.nav__link__membership'),
	asociation = document.querySelector('.nav__link__asociation'),
	membership__block = document.querySelector('.membership__block'),
	asociation__block = document.querySelector('.asociation__block')

membership.addEventListener('click', () => {
	membership__block.classList.toggle('membership__block_active')
	membership.classList.toggle('active__link')

	if (asociation.classList.contains('active__link')) {
		asociation__block.classList.toggle('asociation__block_active')
		asociation.classList.toggle('active__link')
	}
})

asociation.addEventListener('click', () => {
	asociation__block.classList.toggle('asociation__block_active')
	asociation.classList.toggle('active__link')

	if (membership.classList.contains('active__link')) {
		membership__block.classList.toggle('membership__block_active')
		membership.classList.toggle('active__link')
	}
})
