const menu = document.getElementById("menu");
const close = document.getElementById("close");
const contentCon = document.querySelector(".content");

const toggleClass = () => {
  close.classList.toggle("close");
  menu.classList.toggle("close");
  contentCon.classList.toggle("close");
};

menu.addEventListener("click", toggleClass);
close.addEventListener("click", toggleClass);
