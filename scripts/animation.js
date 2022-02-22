import { introImage } from './inputImage.js';

const fadersHome = document.querySelectorAll('#mainHome *');
const fadersDetail = document.querySelectorAll('#mainDetail section *');

const appearOptions = {
    threshold: 0.6,
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

fadersHome.forEach(fader => {
    appearOnScroll.observe(fader);
})

fadersDetail.forEach(fader => {
    appearOnScroll.observe(fader);
})

if (introImage) {
    appearOnScroll.observe(introImage);
}

window.addEventListener('resize', () => {
    window.location.reload();
});

