export default function decorate(block) {
    block.classList.add('carousel-block');
  
    const rows = Array.from(block.children);
    const carouselWrapper = document.createElement('div');
    carouselWrapper.classList.add('carousel-wrapper');
  
    rows.forEach((row, index) => {
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');
      if (index === 0) slide.classList.add('active');
  
      slide.appendChild(row);
      carouselWrapper.appendChild(slide);
    });
  
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('carousel-btn', 'prev');
    prevBtn.innerHTML = '&#10094;';
  
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('carousel-btn', 'next');
    nextBtn.innerHTML = '&#10095;';
  
    block.innerHTML = '';
    block.appendChild(carouselWrapper);
    block.appendChild(prevBtn);
    block.appendChild(nextBtn);
  
    let currentIndex = 0;
    const slides = carouselWrapper.querySelectorAll('.carousel-slide');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  }

