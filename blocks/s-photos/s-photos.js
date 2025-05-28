export default function decorate(block) {
    const rows = Array.from(block.children);
  
    // Create wrapper and header
    const wrapper = document.createElement('div');
    wrapper.classList.add('s-photos-wrapper');
  
    const headerRow = rows[0];
    const headerText = headerRow?.children[0]?.textContent || 'Gallery';
    const header = document.createElement('div');
    header.classList.add('s-photos-header');
    header.setAttribute('id', 'photos');
    header.innerHTML = `${headerText}`;
    wrapper.appendChild(header);
  
    // Create grid container with two columns
    const leftColumn = document.createElement('div');
    const rightColumn = document.createElement('div');
    leftColumn.classList.add('s-photo-column');
    rightColumn.classList.add('s-photo-column');
  
    // Process image rows (skip header)
    rows.slice(1).forEach((row, index) => {
      const cell = row.children[0];
      const img = cell?.querySelector('img');
      if (img) {
        const item = document.createElement('div');
        item.classList.add('s-photo-item');
  
        // Create picture element
        const picture = document.createElement('picture');
        const newImg = document.createElement('img');
        newImg.classList.add('s-photo-img');
  
        // Lazy loading
        if ('IntersectionObserver' in window) {
          const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const target = entry.target;
                if (target.dataset.src) {
                  target.src = target.dataset.src;
                  target.removeAttribute('data-src');
                }
                observer.unobserve(target);
              }
            });
          }, {
            rootMargin: '0px 0px 100px 0px'
          });
  
          if (img.src) {
            newImg.dataset.src = img.src;
          }
          if (newImg.dataset.src) {
            observer.observe(newImg);
          }
        }
  
        picture.appendChild(newImg);
        item.appendChild(picture);
  
        // Alternate placement
        if (index % 2 === 0) {
          leftColumn.appendChild(item);
        } else {
          rightColumn.appendChild(item);
        }
      }
    });
  
    // Create container to hold both columns
    const grid = document.createElement('div');
    grid.classList.add('s-photos-grid');
    grid.appendChild(leftColumn);
    grid.appendChild(rightColumn);
  
    wrapper.appendChild(grid);
    block.innerHTML = '';
    block.appendChild(wrapper);
  }
  