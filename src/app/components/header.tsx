import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="w-full h-auto bg-white shadow-md">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center py-4 px-5 md:px-10">
        {/* Logo */}
        <div>
          <h1 className="text-[#22202E] text-2xl font-normal">Avion</h1>
        </div>

        {/* Links for Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-[#726E8D] text-sm md:text-base">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/homepage2">Homepage2</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/aboutpage">About</Link>
            </li>
            <li>
              <Link href="/productlisting">Product Listing</Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
            <IoSearchOutline size={20} />
          </span>
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
            <IoCartOutline size={20} />
          </span>
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
            <CgProfile size={20} />
          </span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="block md:hidden">
        <ul className="flex flex-wrap gap-4 justify-center text-[#726E8D] text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/homepage2">Homepage2</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/aboutpage">About</Link>
          </li>
          <li>
            <Link href="/productlisting">Product Listing</Link>
          </li>
        </ul>
      </nav>

      {/* Bottom Section - Categories */}
      <div className="mt-4 bg-[#F9F9F9]">
        <ul className="flex flex-wrap gap-4 justify-center text-[#726E8D] text-sm md:text-base p-4">
          <li>
            <Link href="/">Plant Pots</Link>
          </li>
          <li>
            <Link href="/">Ceramics</Link>
          </li>
          <li>
            <Link href="/">Table</Link>
          </li>
          <li>
            <Link href="/">Chair</Link>
          </li>
          <li>
            <Link href="/">Crockery</Link>
          </li>
          <li>
            <Link href="/">Tableware</Link>
          </li>
          <li>
            <Link href="/">Cutlery</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
