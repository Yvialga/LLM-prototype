import "./styles/variables.css";
import "./styles/base.css";
import "./styles/components.css";

const projectSelect = document.querySelector("[data-project-select]");

if (projectSelect) {
  const toggle = projectSelect.querySelector(".projects__return-button");
  const dropdown = projectSelect.querySelector(".projects__return-panel");
  const srLabel = projectSelect.querySelector(".projects__return-selected");
  const options = projectSelect.querySelectorAll(".projects__item-button");

  const closeDropdown = () => {
    if (!dropdown || !toggle) return;
    dropdown.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  const openDropdown = () => {
    if (!dropdown || !toggle) return;
    dropdown.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeDropdown() : openDropdown();
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((btn) => btn.classList.remove("projects__item-button--active"));
      option.classList.add("projects__item-button--active");
      const projectName = option.dataset.projectLabel ?? option.textContent?.trim() ?? "";
      if (srLabel) {
        srLabel.textContent = `Dernier projet sélectionné : ${projectName}`;
      }
      closeDropdown();
    });
  });

  document.addEventListener("click", (event) => {
    if (!projectSelect.contains(event.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDropdown();
      toggle?.focus();
    }
  });
}
