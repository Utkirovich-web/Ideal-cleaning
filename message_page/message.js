const hidden_btn = document.querySelector(".hidden_btn");
const inputs = document.querySelectorAll(".check-item");

inputs.forEach(input => {
  input.addEventListener('change', () => {
    const anyChecked = [...inputs].some(i => i.checked);

    hidden_btn.style.display = anyChecked ? "block" : "none";
  });
});