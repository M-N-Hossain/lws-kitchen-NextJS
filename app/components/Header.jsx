import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header class="container w-[100%] pr-10 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav class="flex justify-between items-center">
        <Link href="/" class="text-3xl font-bold">
          <Image
            src="/assets/lws-kitchen.png"
            alt="hero-img"
            class="ml-4 h-10"
            width={100}
            height={100}
          />
        </Link>
        <ul class="hidden md:flex space-x-6">
          <li>
            <Link href="/" class="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" class="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <a href="./recipes.html" class="hover:text-orange-500">
              Latest Recipes
            </a>
          </li>
        </ul>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
