/**
 * ctfd_organizations - navbar link injector
 * -------------------------------------------
 * Each feature plugin injects only ITS OWN nav link, so plugins stay fully
 * independent (a team member can install just this one plugin and still
 * get a working nav entry, without depending on any other plugin).
 */
(function () {
  function inject() {
    var navList = document.querySelector(".navbar-nav.me-auto");
    if (!navList) return;

    var href = "/plugins/platform-plus/organizations";
    if (navList.querySelector('a[href="' + href + '"]')) return; // already added

    var li = document.createElement("li");
    li.className = "nav-item";
    var a = document.createElement("a");
    a.className = "nav-link";
    a.href = href;
    a.textContent = "Organizations";
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
