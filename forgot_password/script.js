const btn = document.querySelector("button");
const modal = document.querySelector(".invisible_part");
const closeBtn = document.querySelector(".done button");

btn.addEventListener("click", () => {
  modal.classList.add("active");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.classList.remove("no-scroll");
});
