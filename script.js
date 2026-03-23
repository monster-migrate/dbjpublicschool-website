window.addEventListener('scroll', function() {
	const nav = document.querySelector('nav');
	if (window.scrollY > 50) {
		nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
	} else {
		nav.style.boxShadow = 'none';
	}
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const section = document.querySelector(this.getAttribute('href'));
		if(section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

