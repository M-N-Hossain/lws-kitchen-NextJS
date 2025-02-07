import Image from "next/image";
import Link from "next/link";

export default function Recipe({ category, recipe }) {
  return (
    <Link
      href={`/${category}/${recipe.title}`}
      class="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <Image
        src={`/assets/thumbs/${recipe.thumbnail}`}
        alt="Decadent Raspberry and Cream Cake"
        class="w-full h-48 object-cover"
        width={200}
        height={200}
      />
      <div class="p-4">
        <h2 class="font-semibold text-lg mb-2">{recipe.title}</h2>
      </div>
    </Link>
  );
}
