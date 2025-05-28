export default function decorate(block) {
  block.classList.add('eds-about-section');

  const rows = Array.from(block.children);
  if (rows.length < 2) return;

  const titleRow = rows[0];
  const textRow = rows[1];

  const titleCell = titleRow.querySelector('div');
  const textCell = textRow.querySelector('div');

  if (titleCell) {
    const title = document.createElement('h3');
    title.setAttribute('id', 'about');
    title.textContent = titleCell.textContent.trim();
    block.appendChild(title);
  }

  const underline = document.createElement('hr');
  block.appendChild(underline);

  if (textCell) {
    const para = document.createElement('p');
    para.textContent = textCell.textContent.trim();
    block.appendChild(para);
  }

  // Remove original rows
  titleRow.remove();
  textRow.remove();
}
