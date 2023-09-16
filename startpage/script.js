const curEngine = "duckduckgo";
const searchEngines = ["google", "duckduckgo", "bing", "librex"];
const searchBar = document.getElementById("web-search");
searchBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") search(searchBar.value);
});

searchBar.addEventListener("input", resizeInput);
resizeInput.call(searchBar);

function resizeInput() {
  var value = $(this).val();

  var div = $("<div id='inputlength'>").text(value).appendTo("body");

  $(this).width(div.width());
}

function inputFocus() {
  searchBar.focus();
}

window.onkeydown = inputFocus;

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

$("#web-search").autocomplete({
  delay: 500,
  minLength: 3,
  position: { my: "left top-3" },
  source: function (request, response) {
    var proxy = "https://api.allorigins.win/get?url=";
    var suggestURL = "https://duckduckgo.com/ac/?q=%QUERY%";
    suggestURL = suggestURL.replace("%QUERY%", request.term);
    suggestURL = suggestURL.replace(/ /g, "+");
    var requestURL = proxy + encodeURIComponent(suggestURL);
    $.ajax({
      type: "GET",
      url: requestURL,
      dataType: "jsonp",
      contentType: "application/json",
      success: function (data) {
        var suggestions = [];
        var res = JSON.parse(data.contents);
        jQuery.each(res, function (i, val) {
          suggestions.push(val.phrase);
        });
        response(suggestions);
      },
    });
    // fetch(requestURL).then((res) => {
    // //   if (!res.ok) {
    // //     return;
    // //   }
    // //   var data = res.json();
    // //   console.log(data);
    // // });
  },
});
