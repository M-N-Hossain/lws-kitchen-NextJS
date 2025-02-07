"use client";
import Recipe from "../components/categories/Recipe";
import categoires from "../data/categories.json";
import recipes from "../data/recipes.json";
export default function RecipesByCategory({ params }) {
  const categoryName = params.category;
  const categoryId = categoires.find(
    (category) => category.name === categoryName
  ).id;
  const recipeListByCategory = recipes.filter(
    (recipe) => recipe.category_id === categoryId
  );
  return (
    <div className="mb-10">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-4xl font-bold mb-2">
            {categoryName}
            <span class="text-gray-500 text-2xl font-normal">
              ({recipeListByCategory.length})
            </span>
          </h1>
          <p class="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipeListByCategory.map((recipe, index) => (
          <Recipe key={index} category={categoryName} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
