var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-pagination",
    prevEl: ".swiper-pagination",
  },
  mousewhell: true,
  keyboard: true,
});

document.getElementById("plusss").addEventListener("click", scrollToElemen);
function scrollToElemen(pl) {
  pl = document.getElementById("pluss");
  pl.scrollIntoView(true);
}
document.getElementById("rentss").addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("rents");
  element.scrollIntoView(true);
}
document.getElementById("rulesss").addEventListener("click", scrollToEleme);
function scrollToEleme(e) {
  element = document.getElementById("ruless");
  element.scrollIntoView(true);
}
document.getElementById("wheress").addEventListener("click", scrollToElem);
function scrollToElem(e) {
  element = document.getElementById("wheres");
  element.scrollIntoView(true);
}
