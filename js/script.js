function includeHTML(containerId, filePath, callback) {
  var element = document.getElementById(containerId);
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
  var signin = document.querySelector(".sign-in");
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
  };

  signin.onclick = () => {
    signin.classList.toggle("profile");
  };
}

includeHTML("header-container", "components/header.html", contentLoadedCallback);
includeHTML("footer-container", "components/footer.html", contentLoadedCallback);
