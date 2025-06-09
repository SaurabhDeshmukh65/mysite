export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'search-wrapper';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search by title or tag';
  input.className = 'input';

  // Extract the JSON URL from the first row of the block
  const firstRow = block.querySelector('a') || block.querySelector('p');
  const jsonUrl = firstRow?.textContent?.trim();

  // Remove the first row from the block
  if (firstRow) firstRow.remove();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = input.value.trim().toLowerCase();
      if (!query || !jsonUrl) return;

      fetch(jsonUrl)
        .then(res => res.json())
        .then(data => {
          const match = data.data.find(page => {
            const title = page.title?.toLowerCase() || '';
            const tag = page.tag?.toLowerCase() || '';
            return title.includes(query) || tag.includes(query);
          });

          if (match) {
            window.location.href = `https://main--mysite--saurabhdeshmukh65.aem.live${match.path}`;
          } else {
            alert('No matching page found.');
          }
        })
        .catch(err => {
          console.error('Search error:', err);
          alert('Error searching pages.');
        });
    }
  });

  wrapper.appendChild(input);
  block.textContent = '';
  block.appendChild(wrapper);
}
