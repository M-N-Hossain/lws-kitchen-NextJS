import Recipe from "./Recipe";
export default function LatestRecipes({ latestRecipes }) {
  return (
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div class="grid md:grid-cols-4 gap-8">
        {latestRecipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} callingAs={"latest"} />
        ))}
      </div>
    </section>
  );
}
