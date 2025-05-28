export default function decorate(block) {
    block.classList.add('s-address');
    block.setAttribute('id', 'contact');
   
    const rows = Array.from(block.children);
    rows.forEach((row) => {
      const iconCell = row.children[0];
      const textCell = row.children[1];
   
      const div = document.createElement('div');
      div.classList.add('contact-item');
     
   
      const icon = document.createElement('i');
      
      const iconClass = iconCell.textContent.trim().split(':')[1];
      icon.className = `fa fa-${iconClass}`; // Assumes font-awesome
      div.appendChild(icon);
   
      const text = document.createElement('p');
      text.textContent = textCell.textContent.trim();
      div.appendChild(text);
   
      block.appendChild(div);
    });
   
    // Remove the table rows
    rows.forEach((row) => row.remove());
  }