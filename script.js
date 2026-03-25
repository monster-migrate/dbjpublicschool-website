window.addEventListener('scroll', function () {
	const nav = document.querySelector('nav');
	if (window.scrollY > 50) {
		nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
	} else {
		nav.style.boxShadow = 'none';
	}
});

// smooth scroll for in page links
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');

		// Check if the link is an internal anchor (starts with #)
		if (href && href.startsWith('#')) {
			e.preventDefault(); // Stop the page from jumping

			const section = document.querySelector(href);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });

				// Optional: Close mobile menu after clicking
				const mobileMenu = document.getElementById('mobileMenu');
				if (mobileMenu) {
					mobileMenu.classList.remove('open'); // Adjust class name to match your CSS
				}
			}
		}
		// If it doesn't start with # (like academics.html), 
		// the browser will follow the link naturally.
	});
});

