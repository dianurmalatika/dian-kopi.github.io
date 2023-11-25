// Toggle adalah elemen yang tadinya ga ada jadi ada, dan sebaliknya
// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik, muncul sidebar
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan navbar di sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});