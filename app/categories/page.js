import Category from "../components/categories/Category";
import categories from "../data/categories.json";
export default function Categories() {
  const categoryList = categories;

  return (
    <>
      <h1 class="text-5xl font-bold mb-12">Categories</h1>

      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
        {categoryList.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            img={category.image}
          />
        ))}
      </div>
    </>
  );
}
