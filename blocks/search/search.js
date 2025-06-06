export default function decorate(block) {
  // Create a wrapper div for styling
  const wrapper = document.createElement('div');
  wrapper.className = 'search-wrapper';
 
  // Create input with new class
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'searchInput';
  input.placeholder = 'Search by title or tag';
  input.className = 'input'; // Apply the styled input class
 
  // Add event listener for Enter key
  input.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
      const query = input.value.toLowerCase();
      if (!query) return;
 
      try {
        const res = await fetch('https://main--mysite--saurabhdeshmukh65.aem.live/query-index.json');
        const json = await res.json();
        const pages = json.data;
 
        const match = pages.find(page => {
          const titleMatch = page['og:title']?.toLowerCase().includes(query);
          const tagMatch = page['tag']?.toLowerCase().includes(query);
          return titleMatch || tagMatch;
        });
 
        if (match) {
          const baseUrl = 'https://main--mysite--saurabhdeshmukh65.aem.live';
          window.location.href = `${baseUrl}${match.path}`;
        } else {
          alert('No matching page found.');
        }
      } catch (err) {
        console.error('Search failed:', err);
        alert('Error searching pages.');
      }
    }
  });
 
  // Append input to wrapper
  wrapper.appendChild(input);
 
  // Clear block and append wrapper
  block.textContent = '';
  block.appendChild(wrapper);
}
 
 