import { el } from "./helpers.js";

export default function buildRecipePage(recipe) {
  const content = document.querySelector("#content");

  const main = el("main", "recipe-page");

  const header = el("header", "recipe-header");
  const headerEyebrow = el(
    "p",
    "eyebrow",
    `THE RECIPE COLLECTION / ${recipe.category}`,
  );
  const h1 = el("h1", null, recipe.title);
  const intro = el("p", "recipe-intro", recipe.intro);
  const img = el("img");
  img.src = recipe.image;
  img.alt = recipe.imageAlt;
  header.append(headerEyebrow, h1, intro, img);

  const layout = el("div", "recipe-layout");

  const description = el("section", "recipe-description");
  description.append(
    el("p", "eyebrow", "ABOUT THIS RECIPE"),
    el("h2", null, "Description"),
    el("p", null, recipe.description),
  );
  

  // ingredients aside
  const aside = el("aside", "ingredients");
  const ul = el("ul");
  recipe.ingredients.forEach((item) => {
    ul.appendChild(el("li", null, item));
  });
  aside.append(
    el("p", "eyebrow", "WHAT YOU NEED"),
    el("h2", null, "Ingredients"),
    ul,
  );

  // steps section
  const stepsSection = el("section", "recipe-steps");
  const ol = el("ol");
  recipe.steps.forEach((step) => {
    ol.appendChild(el("li", null, step));
  });
  stepsSection.append(
    el("p", "eyebrow", "LET'S GET COOKING"),
    el("h2", null, "Preparation Steps"),
    ol,
  );

  layout.append(description, aside, stepsSection);

  const next = el(
    "button",
    "next-recipe",
    `Next recipe: ${recipe.nextLabel} →`,
  ); // real arrow character, not &rarr;
  next.type = "button";
  next.addEventListener("click", () => {
    document.getElementById(recipe.nextButtonId).click(); // reuses the nav button's handler, so the highlight updates too
  });

  // ---------- assemble, then attach to the page LAST ----------
  main.append(header, layout, next);
  content.appendChild(main);
}
