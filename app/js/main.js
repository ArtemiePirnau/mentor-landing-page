//Counter

const numbersCollection = document.querySelectorAll(".team__number-value");

setInterval(() => {

  numbersCollection.forEach((number) => {
    const updateValues = () => {
      const target = Number(number.getAttribute("data-target"));
      const speed = 4000;
      const targetText = Number(number.innerText);
      const targetValue = target / speed;

      if (targetText < target) {
        number.innerText = Math.ceil(targetText + targetValue);
        setTimeout(updateValues, 1);
      } else {
        number.innerText = target;
      }
    };
    updateValues();
  });

}, 3000);

//Burger Menu

const burger = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav.menu");
const menuList = document.querySelector(".menu__list");

const showMenuList = () => {
  menuList.classList.toggle("show-menu");
  menu.classList.toggle("show");
};

burger.addEventListener("click", showMenuList);

