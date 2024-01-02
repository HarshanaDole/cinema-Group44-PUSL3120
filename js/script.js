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

const filterIcon = document.getElementById("filter-icon");
const filterPopup = document.getElementById("filterPopup");
const closeIcon = document.querySelector(".close");

filterIcon.addEventListener("click", () => {
  togglePopup();
});

closeIcon.addEventListener("click", () => {
  togglePopup();
});

document.body.addEventListener("click", (event) => {
  if (
    !filterPopup.contains(event.target) &&
    event.target !== filterIcon
  ) {
    filterPopup.style.display = "none";
  }
});

function togglePopup() {
  if (
    filterPopup.style.display === "flex" ||
    filterPopup.style.display === ""
  ) {
    filterPopup.style.display = "none";
  } else {
    filterPopup.style.display = "flex";
  }
}
