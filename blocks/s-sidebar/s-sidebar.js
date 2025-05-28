export default function decorate(block) {
    block.classList.add('s-sidebar-block');
  
    const items = Array.from(block.children);
  
    items.forEach((item, index) => {
      item.classList.add('s-sidebar-item');
  
      const image = item.querySelector('picture');
      if (image) {
        image.classList.add('s-sidebar-image');
      }
  
      const label = item.querySelector('p');
      if (label) {
        label.classList.add('s-sidebar-label');
  
        if (index !== 0) {
          const text = label.textContent.trim().toLowerCase();
          const anchor = document.createElement('a');
          anchor.href = `#${text}`;
          anchor.textContent = label.textContent;
          anchor.className = 's-sidebar-link-text';
  
          label.replaceWith(anchor);
        }
      }
  
      // First item is display-only
      if (index === 0) {
        item.classList.add('s-sidebar-display');
      }
    });
  
    // Smooth scroll for links
    document.querySelectorAll('.s-sidebar-link-text').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
  