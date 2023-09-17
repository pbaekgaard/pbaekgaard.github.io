const curEngine = "duckduckgo";
const searchEngines = ["google", "duckduckgo", "bing", "librex"];
const searchBar = document.getElementById("web-search");
const inputContent = document.getElementById("inputcontent");
const suggestionMenu = document.getElementsByClassName("ui-menu");
searchBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    switch (searchBar.value) {
      case "s1":
      case "S1":
        redirect("https://moodle.aau.dk/");
        break;
      case "s2":
      case "S2":
        redirect("https://mail.aau.dk/");
        break;
      case "s3":
      case "S3":
        redirect("https://overleaf.com/");
        break;
      case "d1":
      case "D1":
        redirect("https://github.com/");
        break;
      case "d2":
      case "D2":
        redirect("https://vim.rtorr.com/");
        break;
      case "d3":
      case "D3":
        redirect("https://devdocs.io/");
        break;
      case "f1":
      case "F1":
        redirect("https://www.youtube.com/watch?v=CfPxlb8-ZQ0");
        break;
      case "f2":
      case "F2":
        redirect("https://flocus.com/minimalist-pomodoro-timer/");
        break;
      case "o1":
      case "O1":
        redirect("https://youtube.com/");
        break;
      case "o2":
      case "O2":
        redirect("https://ida.studynow.dk/");
        break;
      default:
        search(searchBar.value);
    }
  }
});

function redirect(url) {
  window.location.href = url;
}

searchBar.addEventListener("input", resizeInput);
resizeInput.call(searchBar);

function resizeInput() {
  inputFocus();
  var value = $(this).val();
  inputContent.innerText = value;
  suggestionMenu.width = inputContent.width;
}

$(searchBar).keydown(function (e) {
  if (e.ctrlKey && e.key === "c") {
    searchBar.value = "";
    inputContent.textContent = "";
  }
});

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
  _resizeMenu: function () {
    this.menu.element.outerWidth(100000);
  },
  position: { my: "left top-3", of: "#inputcontent" },
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
