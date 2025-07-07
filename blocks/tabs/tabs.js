export default function decorate(block) {
  block.classList.add('eds-block');

  const rows = Array.from(block.children);
  const tabContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  tabContainer.className = 'eds-tab-buttons';
  contentContainer.className = 'eds-tab-content';

  block.innerHTML = '';
  block.append(tabContainer, contentContainer);

  for (let i = 0; i < rows.length; i += 2) {
    const title = rows[i];
    const content = rows[i + 1];
    if (!content) continue;

    const btn = document.createElement('button');
    btn.className = 'eds-tab-button';
    btn.textContent = title.textContent.trim();
    btn.tabContent = content;
    tabContainer.appendChild(btn);


    [...content.children].forEach(col => {
      const hasImage = col.querySelector('img, picture');
      col.classList.add(hasImage ? 'eds-image' : 'eds-content');
    });

    content.classList.add('eds-layout');
  }

  tabContainer.addEventListener('click', (e) => {
    if (!e.target.matches('.eds-tab-button')) return;

    const content = e.target.tabContent;
    contentContainer.innerHTML = '';
    contentContainer.appendChild(content);

    tabContainer.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });

  tabContainer.querySelector('button')?.click();
}
