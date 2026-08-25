(function () {
  var done = false;
  function hideBootSplash() {
    if (done) return;
    done = true;
    var splash = document.getElementById("boot-splash");
    var pageRoot = document.getElementById("page-root");
    if (splash) {
      splash.classList.add("hidden");
      window.setTimeout(function () {
        splash.remove();
      }, 280);
    }
    if (pageRoot) {
      pageRoot.classList.remove("booting");
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(hideBootSplash, 300);
    });
  } else {
    window.setTimeout(hideBootSplash, 300);
  }
  window.setTimeout(hideBootSplash, 1200);
})();
