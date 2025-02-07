import HandPicked from "./components/home/HandPicked";
import Hero from "./components/home/Hero";
import LatestRecipes from "./components/home/LatestRecipes";
import Popular from "./components/home/Popular";
import Recommendations from "./components/home/Recommendations";
import SuperDelicious from "./components/home/SuperDelicious";
import categories from "./data/categories.json";
import recipes from "./data/recipes.json";
import sortCategoriesByRecipeCount from "./utils/categoryCount";
import sortRecipesByDate from "./utils/sortRecipesByDate";

export default function Home() {
  const superDelicious = recipes
    .sort((a, b) => b.rating.average_rating - a.rating.average_rating)
    .slice(0, 3);

  const popularCategories = sortCategoriesByRecipeCount(categories, recipes);
  const latestRecipes = sortRecipesByDate(recipes).slice(0, 4);

  return (
    <>
      <Hero />
      <SuperDelicious superDelicious={superDelicious} />
      <Popular popularCategories={popularCategories} />
      <Recommendations />
      <HandPicked />
      <LatestRecipes latestRecipes={latestRecipes} />
    </>
  );
}
