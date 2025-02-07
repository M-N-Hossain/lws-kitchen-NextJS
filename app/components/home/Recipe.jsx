import getCategory from "@/app/utils/getCategory";
import Image from "next/image";
import Link from "next/link";
export default function Recipe({ recipe, callingAs }) {
  return (
    <Link href={`/${getCategory(recipe.category_id)}/${recipe.title}`}>
      <Image
        src={`/assets/thumbs/${recipe.thumbnail}`}
        alt={recipe.title}
        class="w-full h-[300px] object-cover rounded-lg mb-4"
        width={300}
        height={300}
      />
      <h3 class="text-xl font-semibold mb-2">{recipe.title}</h3>
      {callingAs === "delicious" && (
        <div class="flex items-center text-yellow-500 mb-2">
          {Array.from({ length: Math.floor(recipe.rating.average_rating) }).map(
            (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )
          )}
        </div>
      )}
      <p class="text-gray-600">
        {callingAs === "delicious"
          ? recipe.cooking_time
          : getCategory(recipe.category_id)}
      </p>
    </Link>
  );
}
