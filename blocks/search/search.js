export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'search-wrapper'; 

  const input = document.createElement('input');
  input.type = 'text'; 
  input.placeholder = 'Search by title or tag'; 
  input.className = 'input'; 

  // Add event listener to handle Enter key press
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { // Check if Enter key was pressed
      const query = input.value.trim().toLowerCase(); 
      if (!query) return; 

      fetch('https://main--mysite--saurabhdeshmukh65.aem.live/query-index.json')
        .then(res => res.json()) 
        .then(data => {
          // Search for a page where title or tag includes the query
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

  // Add the input to the wrapper
  wrapper.appendChild(input);

  // Clear the block content and add the wrapper to it
  block.textContent = '';
  block.appendChild(wrapper);
}
