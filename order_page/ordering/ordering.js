document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const error = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      error.style.display = "flex";
    }
  });
});