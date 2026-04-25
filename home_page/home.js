// const home = document.querySelector(".main");
// const homeBlack = home.querySelector(".main_image:nth-of-type(2)");
// const homeWhite = home.querySelector(".main_image:nth-of-type(1)");
// const profile = document.querySelector(".profile_btn");
// const hidden_card = document.querySelector(".hidden_card");

// const midsection_bot = document.querySelector(".midsection_bot");
// const midsection_bot_weak = document.getElementById("midsection_bot_weak");
// const midsection_bot_year = document.getElementById("midsection_bot_year");

// console.log(midsection_bot);

// const option_months = document.getElementById("months");
// const option_weak = document.getElementById("weak");
// const option_year = document.getElementById("year");

// const select = document.getElementById("select_term");

// home.addEventListener("mouseenter", () => {
//   homeBlack.style.display = "none";
//   homeWhite.style.display = "block";
// });

// home.addEventListener("mouseleave", () => {
//   homeBlack.style.display = "block";
//   homeWhite.style.display = "none";
// });

// const navItems = [
//   {
//     container: ".order",
//     black: ".order_img:nth-of-type(2)",
//     white: ".order_img:nth-of-type(1)",
//   },
//   {
//     container: ".customer",
//     black: ".customer_img:nth-of-type(1)",
//     white: ".customer_img:nth-of-type(2)",
//   },
//   {
//     container: ".marketing",
//     black: ".marketing_img:nth-of-type(1)",
//     white: ".marketing_img:nth-of-type(2)",
//   },
//   {
//     container: ".service",
//     black: ".service_img:nth-of-type(1)",
//     white: ".service_img:nth-of-type(2)",
//   },
//   {
//     container: ".settings",
//     black: ".settings_img:nth-of-type(1)",
//     white: ".settings_img:nth-of-type(2)",
//   },
// ];

// navItems.forEach((item) => {
//   const container = document.querySelector(item.container);
//   const blackImg = container.querySelector(item.black);
//   const whiteImg = container.querySelector(item.white);

//   container.addEventListener("mouseenter", () => {
//     blackImg.style.display = "none";
//     whiteImg.style.display = "block";
//   });

//   container.addEventListener("mouseleave", () => {
//     blackImg.style.display = "block";
//     whiteImg.style.display = "none";
//   });
// });

// profile.addEventListener("click", () => {
//   if (hidden_card.style.display === "none") {
//     hidden_card.style.display = "block";
//   } else {
//     hidden_card.style.display = "none";
//   }
// });

// const sections = {
//   Oylik: document.querySelector(".midsection_bot"),
//   Haftalik: document.getElementById("midsection_bot_weak"),
//   Yillik: document.getElementById("midsection_bot_year"),
// };

// Object.values(sections).forEach((el) => (el.style.display = "none"));
// sections["Oylik"].style.display = "block";

// select.addEventListener("change", () => {
//   Object.values(sections).forEach((el) => (el.style.display = "none"));
//   sections[select.value].style.display = "block";
// });


const menuBtn = document.querySelector(".menu_btn");
const closeBtn = document.querySelector(".close_btn");
const header = document.querySelector(".header_wrapper");

menuBtn.addEventListener("click", () => {
  header.classList.add("open");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("open");
  document.body.classList.remove("no-scroll");
});