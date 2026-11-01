import buildRecipePage from "./recipePage.js";
import lasagnaImg from "./images/lasagna.jpg";

export function loadlasagna() {
  buildRecipePage({
    category: "MAIN COURSE",
    title: "Lasagna",
    intro:
      "Layers of pasta, savoury beef sauce and melted cheese. A comforting meal made for sharing.",
    image: lasagnaImg,
    imageAlt: "Homemade lasagna",
    description:
      "Lasagna is a type of pasta dish made with layers of flat noodles and sauce. This version combines ground beef, tomato sauce and mozzarella cheese for a rich, satisfying meal.",
    ingredients: [
      "Lasagna noodles",
      "Ground beef",
      "Tomato sauce",
      "Mozzarella",
    ],
    steps: [
      "Cook the lasagna noodles according to package directions.",
      "Brown the ground beef in a skillet.",
      "Add the tomato sauce to the beef and simmer for 10 minutes.",
      "Layer the noodles, beef sauce and cheese in a baking dish.",
      "Bake at 375°F for 30 minutes or until golden brown.",
    ],
    nextLabel: " Fried Potatoes",
    nextButtonId: "potatoes-btn",
  });
}
