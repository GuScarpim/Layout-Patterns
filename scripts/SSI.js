function loadMenu() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("menuContainer").innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "navBar.html", true);

  xhr.send();
}

loadMenu();