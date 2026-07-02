(function () {
  function addLink(navList, href, label) {
    if (navList.querySelector('a[href="' + href + '"]')) return;
    var li = document.createElement("li");
    li.className = "nav-item";
    var a = document.createElement("a");
    a.className = "nav-link";
    a.href = href;
    a.textContent = label;
    if (window.location.pathname === href) a.classList.add("active");
    li.appendChild(a);
    navList.appendChild(li);
  }

  function inject() {
    var navList = document.querySelector(".navbar-nav.me-auto");
    if (!navList) return;
    addLink(navList, "/plugins/platform-plus/learning-paths", "Learning Paths");
    addLink(navList, "/plugins/platform-plus/progress", "My Progress");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
