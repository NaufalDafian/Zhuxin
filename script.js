let currentSlide = 0;

function updateSlider() {
    const slider = document.getElementById('mainSlider');
    const indicators = document.querySelectorAll('.indicator');
    const slides = document.querySelectorAll('.slide');

    if (slider && slides.length > 0) {
        // Geser slider
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update indicators (titik-titik bawah)
        indicators.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

function moveslide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Inisialisasi awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
});