//Duration Splash
let loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.height = "100px";
  loader.style.width = "100px";
  loader.style.borderRadius = "50%";
  loader.style.visibility = "hidden";
  loader.style.transitionDuration="2s";
});
