const send_btn = document.querySelector(".send_btn");
const no_btn = document.querySelector(".btn_no");
const hidden_sec = document.querySelector(".hidden_sec");

function openModal() {
  hidden_sec.style.display = "flex";
  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("no-scroll");
}

function closeModal() {
  hidden_sec.style.display = "none";
  document.body.classList.remove("no-scroll");
  document.documentElement.classList.remove("no-scroll");
}

send_btn.addEventListener("click", openModal);
no_btn.addEventListener("click", closeModal);