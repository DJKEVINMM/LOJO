const buttons = document.querySelectorAll("button");
const themeButtons = document.querySelectorAll(".theme-button");
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("pulse");
    setTimeout(() => button.classList.remove("pulse"), 300);
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;

    themeButtons.forEach((other) => {
      other.setAttribute("aria-pressed", other === button ? "true" : "false");
    });

    if (theme === "gold") {
      body.removeAttribute("data-theme");
      return;
    }

    body.setAttribute("data-theme", theme);
  });
});
