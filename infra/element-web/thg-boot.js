(function () {
  var hash = location.hash || "";
  if (!hash || hash === "#" || hash === "#/" || hash.indexOf("#/welcome") === 0) {
    history.replaceState(null, "", location.pathname + location.search + "#/login");
  }
})();
