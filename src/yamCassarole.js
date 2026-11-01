import buildRecipePage from "./recipePage.js";
import yamImg from "./images/yam.webp";

export function loadYam() {
  buildRecipePage({
    category: "HOMEMADE",
    title: "Yam Casserole",
    intro:
      "A hearty yam dish with butter and cinnamon, prepared for a warm and comforting meal.",
    image: yamImg,
    imageAlt: "Yam casserole",
    description:
      "Yam casserole is a traditional dish made with yams, often served during holidays. This recipe combines cooked yams with butter, sugar and cinnamon before baking until golden.",
    ingredients: ["Yams", "Butter", "Sugar", "Cinnamon"],
    steps: [
      "Cook the yams until tender.",
      "Melt butter in a saucepan and add sugar and cinnamon.",
      "Combine the cooked yams with the butter mixture.",
      "Pour the mixture into a baking dish.",
      "Bake at 375°F for 30 minutes or until golden brown.",
    ],
    nextLabel: "Coquito",
    nextButtonId: "coquito-btn",
  });
}
