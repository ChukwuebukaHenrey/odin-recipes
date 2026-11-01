import { el } from "./helpers.js";
import heroimg from "./images/kebab.jpg";
import lasagnaImg from "./images/lasagna.jpg";
import friedPotatoImg from "./images/pot.webp";
import yamImg from "./images/yam.webp";
import cocuiloImg from "./images/cocuilo.jpg";
import jollofImg from "./images/jollof.jpg";

export function loadHome() {
  const content = document.querySelector("#content");
  const main = el("main");

  const hero = el("section", "hero");
  const heroContent = el("div", "hero-content");

  const eyebrow = el("p", "eyebrow", "GOOD FOOD STARTS HERE");

  const h1 = el("h1");
  const highlight = el("span", null, "cooking.");
  h1.append("Discover recipes", el("br"), "worth ", highlight);
  const heroDescription = el(
    "p",
    "hero-description",
    " From comforting homemade meals to refreshing drinks, discover simple recipes that bring good food to your table.",
  );

  const primaryButton = el("a", "primary-button", "Explore Recipes");
  primaryButton.setAttribute("href", "#recipes");

  const arrow = el("span", null, " → ");
  arrow.setAttribute("aria-hidden", "true");
  primaryButton.append(arrow);

  const heroDiv = el("div", "hero-note");

  heroDiv.append(
    el("span", "note-line"),
    "Simple ingredients. Delicious results.",
  );

  heroContent.append(eyebrow, h1, heroDescription, primaryButton, heroDiv);

  const heroImageDiv = el("div", "hero-image");
  const heroImage = el("img", null);
  heroImage.setAttribute("src", heroimg);
  heroImage.setAttribute("alt", "A delicious homemade lasagna");

  const imageLabel = el("div", "image-label");
  const viewReceipeSpan = el("span", null, "FEATURED RECIPE");
  const viewReceipeH2 = el("h2", null, "Homemade Lasagna");
  const viewReceipelink = el("a", null, "View recipe →");
  viewReceipelink.setAttribute("href", "./Pages/lasagna.html");

  imageLabel.append(viewReceipeSpan, viewReceipeH2, viewReceipelink);
  heroImageDiv.append(heroImage, imageLabel);
  hero.append(heroContent, heroImageDiv);

  const recipeSection = el("section", "recipes-section");
  recipeSection.id = "recipes";

  const sectionHeading = el("div", "section-heading");
  const div = el("div");
  div.append(
    el("p", "eyebrow", "THE RECIPE COLLECTION"),
    el("h2", null, "What are you cooking today?"),
    el("p", null, "Find something delicious to make, one recipe at a time."),
  );

  sectionHeading.append(div);

  const recipeGrid = el("div", "recipe-grid");
  function receipeCardHelper(
    imgPath,
    imgAlt,
    spanEL1Text,
    h3Text,
    pText,
    href,
  ) {
    const card = document.createElement("a");
    card.classList.add("recipe-card");
    card.setAttribute("href", href);

    const imgEL = document.createElement("img");
    imgEL.setAttribute("src", imgPath);
    imgEL.setAttribute("alt", imgAlt);

    const divEL = document.createElement("div");
    divEL.classList.add("card-content");

    const spanEL1 = document.createElement("span");
    spanEL1.classList.add("recipe-category");
    spanEL1.textContent = spanEL1Text;

    const h3EL = document.createElement("h3");
    h3EL.textContent = h3Text;

    const pEL = document.createElement("p");
    pEL.textContent = pText;

    const spanEL2 = document.createElement("span");
    spanEL2.classList.add("card-link");
    spanEL2.textContent = "View Recipe →";

    divEL.append(spanEL1, h3EL, pEL, spanEL2);

    card.append(imgEL, divEL);

    return card;
  }

  const card1 = receipeCardHelper(
    lasagnaImg,
    "Homemade lasagna",
    "MAIN COURSE",
    "Lasagna",
    "Layers of pasta, savoury beef sauce and melted cheese.",
    "./lasagna.html",
  );

  const card2 = receipeCardHelper(
    friedPotatoImg,
    "Fried potatoes",
    "SIDE DISH",
    "Fried Potatoes",
    "A simple favourite with a satisfying golden finish.",
    "./friedPotatoes.html",
  );

  const card3 = receipeCardHelper(
    yamImg,
    "Yam casserole",
    "HOMEMADE",
    "Yam casserole",
    "A hearty yam dish for a comforting meal.",
    "./yamCasserole.html",
  );

  const card4 = receipeCardHelper(
    cocuiloImg,
    "A glass of coquito",
    "DRINKS",
    "Coquito",
    "A creamy, coconut-based drink to try at home.",
    "./Coquito.html",
  );

  const card5 = receipeCardHelper(
    jollofImg,
    "Nigerian jollof rice",
    "NIGERIAN FAVOURITE",
    "Jollof Rice",
    "A beloved West African rice dish packed with flavour.",
    "./jollofRice.html",
  );
  recipeGrid.append(card1, card2, card3, card4, card5);

  recipeSection.append(sectionHeading, recipeGrid);

  const closingSection = el("section", "closing-section");
  const closingSectionLink = el("a", "secondary-button", " Find a Recipe ↑");
  closingSectionLink.setAttribute("href", "#recipes");
  closingSection.append(
    el("p", "eyebrow", "YOUR NEXT MEAL STARTS HERE"),
    el("h2", null, "Good food doesn't have to be complicated."),
    closingSectionLink,
  );
  main.append(hero, recipeSection, closingSection);
  content.appendChild(main);
}
