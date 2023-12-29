function includeHTML(callback) {
  var element = document.getElementById("header-container");
  var filePath = element.getAttribute("include-html");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      element.innerHTML = this.responseText;
      if (callback) {
        callback();
      }
    }
  };
  xhr.open("GET", filePath, true);
  xhr.send();
}

function contentLoadedCallback() {
  var navbar = document.querySelector(".navbar");
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
  };
}

includeHTML(contentLoadedCallback);
