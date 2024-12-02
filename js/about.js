const navEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("header-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("header-scrolled");
  }
});
