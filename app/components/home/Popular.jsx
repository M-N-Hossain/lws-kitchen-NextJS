import Link from "next/link";
import Category from "./Category";

export default function Popular({ popularCategories }) {
  const categoriesToShow = popularCategories.slice(0, 6);
  return (
    <section class="mb-16">
      <div class="flex justify-between items-top">
        <h2 class="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="./categories" class="text-orange-500">
          View All
        </Link>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categoriesToShow.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </section>
  );
}
