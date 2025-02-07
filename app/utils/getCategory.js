import categories from "../data/categories.json";
export default function getCategory(category_id) {
  const category = categories.find((category) => category.id === category_id);

  return category.name;
}
