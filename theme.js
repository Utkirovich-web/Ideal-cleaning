const toggle = document.getElementById("theme");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  if (toggle) toggle.checked = true;
} else {
  document.documentElement.classList.remove("dark");
}

if (toggle) {
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}

// blur

const topPart = document.querySelector(".top_part");

function updateNavbar() {
  const scrolled = window.scrollY > 50;
  topPart.classList.toggle("active", scrolled);
}

updateNavbar();

// scroll
window.addEventListener("scroll", updateNavbar);


// menu 

if (!window.__themeLoaded) {
  window.__themeLoaded = true;

  const menuBtn = document.querySelector(".menu_btn");
  const closeBtn = document.querySelector(".close_btn");
  const header = document.querySelector(".header_wrapper");

  if (menuBtn && closeBtn && header) {
    menuBtn.addEventListener("click", () => {
      header.classList.add("open");
      document.body.classList.add("no-scroll");
    });

    closeBtn.addEventListener("click", () => {
      header.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  }
}
