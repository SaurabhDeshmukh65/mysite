export default function decorate(block) {
    block.classList.add('image-carousel-block');
  
    const originalImages = Array.from(block.querySelectorAll('picture')).map(pic => {
      const img = pic.querySelector('img');
      return img ? img.cloneNode(true) : null;
    }).filter(Boolean);
  
    const track = document.createElement('div');
    track.className = 'image-carousel-track';
  
    originalImages.forEach(img => {
      const clone = img.cloneNode(true);
      track.appendChild(clone);
    });
  
    const wrapper = document.createElement('div');
    wrapper.className = 'carousel-wrapper';
    wrapper.appendChild(track);
  
    const leftBtn = document.createElement('button');
    leftBtn.className = 'carousel-btn left';
    leftBtn.innerHTML = '&#10094;';
  
    const rightBtn = document.createElement('button');
    rightBtn.className = 'carousel-btn right';
    rightBtn.innerHTML = '&#10095;';
  
    block.innerHTML = '';
    block.appendChild(leftBtn);
    block.appendChild(wrapper);
    block.appendChild(rightBtn);
  
    let currentIndex = 0;
    const visibleCount = 3;
  
    function updateCarousel() {
      const offset = -(currentIndex * (150 + 20)); // image width + gap
      track.style.transform = `translateX(${offset}px)`;
    }
  
    function rotateCarousel(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = originalImages.length - visibleCount;
      } else if (currentIndex > originalImages.length - visibleCount) {
        currentIndex = 0;
      }
      updateCarousel();
    }
  
    leftBtn.addEventListener('click', () => rotateCarousel(-1));
    rightBtn.addEventListener('click', () => rotateCarousel(1));
  
    setInterval(() => rotateCarousel(1), 4000);
  
    updateCarousel();
  }
  