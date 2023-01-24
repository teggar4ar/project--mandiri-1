// Toggle class active

const navbarNav = document.querySelector
('.navbar-nav');

// Ketika Hamburger diklik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};


// Klik Diluar sidebar untuk menghilangkan menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
