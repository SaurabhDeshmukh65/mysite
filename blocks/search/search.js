const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

// Replace with your actual JSON index URL
const indexUrl = 'local--mysite--saurabhdeshmukh65.hlx.live/query-index.json';

let dataIndex = [];

fetch(indexUrl)
  .then(response => response.json())
  .then(data => {
    dataIndex = data;
  })
  .catch(error => {
    console.error('Error loading index:', error);
  });

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = dataIndex.filter(item => {
    return (
      (item.title && item.title.toLowerCase().includes(query)) ||
      (item.tag && item.tag.toLowerCase().includes(query)) ||
      (item.description && item.description.toLowerCase().includes(query))
    );
  });

  displayResults(filtered);
});

function displayResults(results) {
  resultsContainer.innerHTML = '';
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  results.forEach(item => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `
      <h3>${item.title || 'No Title'}</h3>
      <p>${item.tag ? 'Tag: ' + item.tag : ''}</p>
      <p>${item.description || ''}</p>
    `;
    resultsContainer.appendChild(div);
  });
}
