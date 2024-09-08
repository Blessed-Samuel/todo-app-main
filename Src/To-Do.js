// Desktop Visibility
const mbLink = document.querySelector('.mb-link');

function updateVisibility() {
    if (window.innerWidth >= 1024) {
        mbLink.classList.toggle('hidden');
    } else {
        mbLink.classList.add('hidden');
    }
}

updateVisibility();
window.addEventListener('resize', updateVisibility);

// Mobile Visibility
const mbLinkMobile = document.querySelector('.mb-link-mobile');

function updateMbVisibility() {
    if (window.innerWidth <= 375) {
        mbLinkMobile.classList.toggle('hidden');
    } else {
        mbLinkMobile.classList.add('hidden');
    }
}

updateMbVisibility();
window.addEventListener('resize', updateMbVisibility);