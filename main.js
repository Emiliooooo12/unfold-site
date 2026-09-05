const button = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-links a");

function setOpen(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  button?.setAttribute("aria-expanded", String(isOpen));
}

button?.addEventListener("click", () => {
  setOpen(!document.body.classList.contains("nav-open"));
});

for (const link of links) {
  link.addEventListener("click", () => setOpen(false));
}
