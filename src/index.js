import "./CSS Files/index.css";
import "./CSS Files/sharedStyles.css";
import "./CSS Files/jollof.css";
import { loadHome } from "./home.js";
import { loadPotatoes } from "./potatoes.js";
import { loadYam } from "./yamCassarole.js";
import { loadlasagna } from "./Lasagna.js";
import { loadCoquito } from "./Coquito.js";
import { loadJollof } from "./Jollof.js";

const content = document.querySelector("#content");
const tabs = {
  "home-btn": loadHome,
  "yam-btn": loadYam,
  "potatoes-btn": loadPotatoes,
  "lasagna-btn": loadlasagna,
  "coquito-btn": loadCoquito,
  "jollof-btn": loadJollof,
};

function showTab(buttonId) {
  content.textContent = "";
  tabs[buttonId]();
  setActive(document.getElementById(buttonId));
  window.scrollTo(0, 0);
}

const navButtons = document.querySelectorAll(".navlinks button");
navButtons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.id));
});

function setActive(clickedButton) {
  for (let i = 0; i < navButtons.length; i++) {
    const element = navButtons[i];
    element.classList.remove("active");
  }
  clickedButton.classList.add("active");
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActive(button);
  });
});

document.querySelectorAll(".logo-button").forEach((btn) => {
  btn.addEventListener("click", () => showTab("home-btn"));
});

showTab("home-btn");
