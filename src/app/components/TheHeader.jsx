import { navLinks } from "../data/navLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="absolute w-full">
      <nav className="flex flex-row items-start w-full h-fit justify-between p-5">
        <div className="flex w-fit">
          <Link
            href="/"
            className="font-medium font-serif text-2xl md:text-2xl lg:text-3xl"
          >
            Broadway Town Square
          </Link>
        </div>
        <div className="hidden lg:flex flex-row justify-end gap-5 w-fit">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.linkTo}
              className="hover:bg-gray-100 px-2 py-0.5 rounded-md"
            >
              {item.text}
            </Link>
          ))}
          <a
            href="mailto:propertymanager@clutchindustries.com"
            target="_blank"
            className="hover:bg-gray-100 px-2 py-0.5 rounded-md"
          >
            Availability
          </a>
          <a
            href="tel:+15035077605"
            target="_blank"
            className="hover:bg-gray-100 px-2 py-0.5 rounded-md"
          >
            503-507-7605
          </a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
