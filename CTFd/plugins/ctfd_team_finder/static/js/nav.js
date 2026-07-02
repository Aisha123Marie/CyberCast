(function () {
  function inject() {
    var navList = document.querySelector(".navbar-nav.me-auto");
    if (!navList) return;

    var href = "/plugins/platform-plus/team-finder";
    if (navList.querySelector('a[href="' + href + '"]')) return;

    var li = document.createElement("li");
    li.className = "nav-item";
    var a = document.createElement("a");
    a.className = "nav-link";
    a.href = href;
    a.textContent = "Find a Team";
    if (window.location.pathname === href) a.classList.add("active");
    li.appendChild(a);
    navList.appendChild(li);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
