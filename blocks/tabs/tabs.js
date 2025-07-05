export default function decorate(block) {
    block.classList.add('eds-block');
  
    const rows = Array.from(block.children);
    const tabContainer = document.createElement('div');
    const contentContainer = document.createElement('div');
    tabContainer.className = 'eds-tab-buttons';
    contentContainer.className = 'eds-tab-content';
  
    const tabs = [];
    for (let i = 0; i < rows.length; i += 2) {
      if (rows[i + 1]) tabs.push({ title: rows[i], content: rows[i + 1] });
    }
  
    tabs.forEach(({ title }, i) => {
      const btn = document.createElement('button');
      btn.className = 'eds-tab-button';
      btn.textContent = title.textContent.trim();
      btn.dataset.tabIndex = i;
      tabContainer.appendChild(btn);
    });
  
    block.innerHTML = '';
    block.append(tabContainer, contentContainer);
  
    tabContainer.addEventListener('click', (e) => {
      if (!e.target.matches('.eds-tab-button')) return;
  
      const { content } = tabs[e.target.dataset.tabIndex];
      contentContainer.innerHTML = '';
      const layout = document.createElement('div');
      layout.className = 'eds-layout';
  
      [...content.children].forEach(col => {
        const div = document.createElement('div');
        div.className = col.querySelector('img,picture') ? 'eds-image' : 'eds-content';
        div.innerHTML = col.innerHTML;
        layout.appendChild(div);
      });
  
      contentContainer.appendChild(layout);
      tabContainer.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
    });
  
    tabContainer.querySelector('button')?.click();
  }
  