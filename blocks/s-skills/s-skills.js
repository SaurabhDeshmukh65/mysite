export default function decorate(block) {
    block.classList.add('skills-block');
  
    const rows = Array.from(block.children);
  
    rows.forEach((row, rowIndex) => {
      row.classList.add('skill');
  
      const columns = Array.from(row.children);
  
      if (rowIndex === 0) {
        // First row is the title
        row.classList.add('skills-title');
      } else if (columns.length >= 2) {
        const labelText = columns[0].textContent.trim();
        const percent = columns[1].textContent.trim();
  
        // Clear existing content
        row.innerHTML = '';
  
        const label = document.createElement('label');
        label.classList.add('skill-label');
        label.textContent = labelText;
  
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.setAttribute('data-percent', percent);
  
        const fill = document.createElement('div');
        fill.classList.add('progress-fill');
        fill.style.width = '0';
  
        progressBar.appendChild(fill);
        row.appendChild(label);
        row.appendChild(progressBar);
  
        // Animate fill after slight delay
        setTimeout(() => {
          fill.style.width = percent + '%';
        }, 100);
      }
    });
  }
  