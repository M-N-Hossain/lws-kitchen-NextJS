export default function sortCategoriesByRecipeCount(categories, recipes) {
  const categoryCountMap = new Map();

  recipes.forEach((recipe) => {
    const categoryId = recipe.category_id;
    categoryCountMap.set(
      categoryId,
      (categoryCountMap.get(categoryId) || 0) + 1
    );
  });

  // Sort categories based on the number of recipes they have
  return [...categories].sort(
    (a, b) =>
      (categoryCountMap.get(b.id) || 0) - (categoryCountMap.get(a.id) || 0)
  );
}
