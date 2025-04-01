document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let index;
  let documents;

// Function to fetch the search index
  function fetchIndex() {
    fetch('/search.json') // Adjust the path if necessary
      .then(response => response.json())
      .then(data => {
        documents = data;
        index = lunr(function() {
          this.ref('url');
          this.field('title', { boost: 10 });
          //this.field('body');

          documents.forEach(function(doc) {
            this.add(doc);
          }, this);
        });
      });
  }

function decodeHtml(html) {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(html, "text/html").documentElement.textContent;
  return decodedString;
}

  // Function to display search results
  function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length) {
		results.forEach(result => {
		  const doc = documents.find(d => d.url === result.ref);
		  if (doc) {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = doc.url;
			a.textContent = decodeHtml(doc.title); // Decode the title
			//const span = document.createElement('span');
			//span.textContent = decodeHtml(doc.body);   // Decode the body (if needed)
			li.appendChild(a);
			li.appendChild(document.createElement('br'));
			//li.appendChild(span);
			searchResults.appendChild(li);
		  }
		});
    } else {
      const li = document.createElement('li');
      li.textContent = 'No results found.';
      searchResults.appendChild(li);
    }
  }

  // Event listener for the search input
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (index && documents) {
		 if (query.length > 0) { // Add this check
			const results = index.search(query);
			displayResults(results);
		 } else {
			searchResults.innerHTML = ''; // Clear the results when input is empty
		 }
    }
  });

  // Initialize the search
  fetchIndex();
});