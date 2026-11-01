import buildRecipePage from "./recipePage.js";
import coquitoImg from "./images/cocuilo.jpg";

export function loadCoquito() {
  buildRecipePage({
    category: "DRINKS",
    title: "Coquito",
    intro:
      "A creamy coconut-based drink with warm spices, traditionally enjoyed during the Christmas season.",
    image: coquitoImg,
    imageAlt: "Coquito coconut drink",
    description:
      "Coquito is a traditional Puerto Rican coconut-based alcoholic beverage, typically served during the Christmas season. It is often referred to as Puerto Rican eggnog because of its creamy texture and rich flavour.",
    ingredients: [
      "1 can (12 oz) evaporated milk",
      "1 can (14 oz) sweetened condensed milk",
      "1 can (15 oz) cream of coconut",
      "1 cup white rum",
      "1 teaspoon vanilla extract",
      "1/2 teaspoon ground cinnamon",
      "1/4 teaspoon ground nutmeg",
    ],
    steps: [
      "Combine all ingredients in a large mixing bowl.",
      "Whisk until well combined.",
      "Transfer the mixture to a serving container.",
      "Refrigerate for at least 2 hours before serving.",
    ],
    nextLabel: " Jollof Rice",
    nextButtonId: "jollof-btn",
  });
}
