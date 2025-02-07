import getCategory from "@/app/utils/getCategory";
import Image from "next/image";
import Link from "next/link";
import recipes from "../../data/recipes.json";
export default function Hero() {
  const recipeToSHow = recipes[10];
  const category = getCategory(recipeToSHow.category_id);

  return (
    <section class="mb-16 bg-orange-50">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/assets/thumbs/${recipeToSHow.thumbnail}`}
            alt={recipeToSHow.title}
            class="w-full h-[450px] object-cover rounded-lg"
            height={450}
            width={600}
          />
        </div>
        <div>
          <h1 class="text-4xl font-bold mb-4">{recipeToSHow.title}</h1>
          <p class="text-gray-600 mb-4">
            Indulge in the ultimate Italian dessert experience with our velvety
            smooth tiramisu. Layers of coffee-soaked ladyfingers and creamy
            mascarpone filling create a heavenly treat that&apos;s sure to
            impress.
          </p>
          <Link
            href={`/${category}/${recipeToSHow.title}`}
            class="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
