const curEngine = "google";
const searchEngines = ['google', 'duckduckgo', 'bing', 'librex'];
const searchBar = document.getElementById('web-search');
searchBar.addEventListener('keypress', function(e) {
  if (e.key === 'Enter')
    search(searchBar.value);
});

function Engine(searchTerm, engine) {
  switch (engine) {
    case "google":
      return "https://www.google.com/search?q=" + searchTerm;
    case "duckduckgo":
      return "https://duckduckgo.com/?q=" + searchTerm;
    case "bing":
      return "https://www.bing.com/search?q=" + searchTerm;
    case "librex":
      return "https://librex.extravi.dev/search.php?q=" + searchTerm;

  }
}

function search(searchTerm) {
  console.log(Engine(searchTerm, curEngine));
  window.location.href = Engine(searchTerm, curEngine);
}
