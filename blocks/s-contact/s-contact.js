export default function decorate(block) {
  block.classList.add('s-contact-block'); 
  block.setAttribute('id', 'contact');
  const rows = Array.from(block.children);
  

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('contact-card');

  // Title (first row)
  const titleRow = rows[0];
  const titleText = titleRow?.children[0]?.textContent || '';
  const title = document.createElement('h2');
  title.classList.add('contact-card-title');
  title.textContent = titleText;
  wrapper.appendChild(title);

  // Divider below title
  const divider = document.createElement('hr');
  divider.classList.add('contact-card-divider');
  wrapper.appendChild(divider);

  // Remaining rows: icon + text
  rows.slice(1).forEach(row => {
    const iconCell = row.children[0];
    const textCell = row.children[1];

    const item = document.createElement('div');
    item.classList.add('contact-card-item');

    const icon = iconCell?.querySelector('img')?.cloneNode(true);
    if (icon) {
      icon.classList.add('contact-card-icon');
      item.appendChild(icon);
    }

    const text = document.createElement('p');
    text.classList.add('contact-card-text');
    text.textContent = textCell?.textContent || '';
    item.appendChild(text);

    wrapper.appendChild(item);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);
}
