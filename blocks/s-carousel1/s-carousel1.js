export default function decorate(block) {
  block.classList.add('image-carousel-block');

  const images = Array.from(block.querySelectorAll('picture'));
  const carousel = document.createElement('div');
  carousel.classList.add('image-carousel');

  const track = document.createElement('div');
  track.classList.add('carousel-track');

  images.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-image-slide');
    slide.appendChild(img);
    track.appendChild(slide);
  });

  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('carousel-dots');

  images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      updateFocus(index);
    });
    dotsContainer.appendChild(dot);
  });

  carousel.appendChild(track);
  block.innerHTML = '';
  block.appendChild(carousel);
  block.appendChild(dotsContainer);

  function updateFocus(index) {
    const slides = track.querySelectorAll('.carousel-image-slide');
    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    slides.forEach((slide, i) => {
      slide.classList.remove('focused', 'side-left', 'side-right');
      if (i === index) {
        slide.classList.add('focused');
      } else if (i === index - 1) {
        slide.classList.add('side-left');
      } else if (i === index + 1) {
        slide.classList.add('side-right');
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  updateFocus(0); // Initial focus
}
