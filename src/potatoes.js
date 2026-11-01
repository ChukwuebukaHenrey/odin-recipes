import buildRecipePage from "./recipePage.js";
import potatoImg from "./images/pot.webp"; // ./ because the images folder is inside src, next to this file

export function loadPotatoes() {
  buildRecipePage({
    category: "SIDE DISH", // from the eyebrow: "THE RECIPE COLLECTION / SIDE DISH"
    title: "Fried Potatoes", // the h1
    intro:
      "Crispy on the outside, tender on the inside. A simple side dish with familiar ingredients.",
    image: potatoImg,
    imageAlt: "Golden fried potatoes",
    description:
      "Fried potatoes are a simple and delicious side dish made by frying sliced potatoes in oil until crispy. Salt, pepper and fresh scent leaves add flavour to this straightforward recipe.",
    ingredients: ["Potatoes", "Oil", "Salt", "Pepper", "Scent leaves"], // each <li> text
    steps: [
      "Cut the potatoes into fry-shaped pieces.",
      "Heat oil in a deep pan or fryer to 375°F.",
      "Carefully add the potato pieces and fry until golden brown.",
      "Remove the potatoes and drain on paper towels.",
      "Season with salt and pepper to taste.",
      "Garnish with chopped scent leaves if desired.",
    ],
    nextLabel: "Yam Casserole",
    nextButtonId: "yam-btn",
  });
}
