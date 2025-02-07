import Image from "next/image";
import Link from "next/link";
export default function Category({ img, name }) {
  return (
    <Link href={`/${name}`} class="text-center">
      <div class="overflow-hidden rounded-full mb-4 relative cursor-pointer">
        <Image
          src={`/assets${img}`}
          alt={name}
          class="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
          width={200}
          height={200}
        />
      </div>
      <h2 class="text-xl font-semibold">{name}</h2>
    </Link>
  );
}
