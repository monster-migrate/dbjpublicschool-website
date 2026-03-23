const menuToggle = document.getElementById('menuOpen');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
	mobileMenu.classList.toggle('active');
	menuToggle.classList.toggle('is-active');
	if (mobileMenu.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
});


