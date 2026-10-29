const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav?.classList.toggle("is-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  });
});

document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) status.textContent = "Thanks — this concept form is ready to connect to a signup service.";
  });
});
