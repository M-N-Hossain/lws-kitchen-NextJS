export default function sortRecipesByDate(recipes) {
  return recipes
    .slice()
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
}
