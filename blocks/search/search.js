export default function decorate(block) {
  // Create search input
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'searchInput';
  input.placeholder = 'Search by title, tag, etc...';

  const results = document.createElement('div');
  results.id = 'results';

  searchContainer.appendChild(input);
  searchContainer.appendChild(results);
  block.appendChild(searchContainer);

  // Load JSON index
  const indexUrl = 'local--mysite--saurabhdeshmukh65.hlx.live/query-index.json'; // Replace with your actual URL
  let dataIndex = [];

  fetch(indexUrl)
    .then(response => response.json())
    .then(data => {
      dataIndex = data;
    })
    .catch(error => {
      console.error('Error loading index:', error);
    });

  // Search logic
  input.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filtered = dataIndex.filter(item => {
      return (
        (item.title && item.title.toLowerCase().includes(query)) ||
        (item.tag && item.tag.toLowerCase().includes(query)) ||
        (item.description && item.description.toLowerCase().includes(query))
      );
    });

    displayResults(filtered, results);
  });

  // Display results
  function displayResults(resultsData, container) {
    container.innerHTML = '';
    if (resultsData.length === 0) {
      container.innerHTML = '<p>No results found.</p>';
      return;
    }

    resultsData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'result-item';
      div.innerHTML = `
        <h3>${item.title || 'No Title'}</h3>
        <p>${item.tag ? 'Tag: ' + item.tag : ''}</p>
        <p>${item.description || ''}</p>
      `;
      container.appendChild(div);
    });
  }
}
