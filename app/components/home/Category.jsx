import Image from "next/image";
import Link from "next/link";
export default function Category({ category }) {
  return (
    <Link href={`/${category.name}`} class="cursor-pointer text-center group">
      <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
        <Image
          src={`/assets${category.image}`}
          alt="Breakfast"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          width={200}
          height={200}
        />
      </div>
      <p class="transition-transform duration-300 group-hover:scale-105">
        {category.name}
      </p>
    </Link>
  );
}
