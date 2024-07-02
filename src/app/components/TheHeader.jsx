import { navLinks } from "../data/navLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="absolute w-full">
      <nav className="flex flex-row items-start w-full h-fit justify-between p-5">
        <Link className="flex w-fit text-xl lg:text-2xl" href="/">
          Broadway Town Square
        </Link>

        <div className="hidden lg:flex flex-row justify-end gap-5 w-fit">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.linkTo}
              className="hover:bg-gray-100 px-2 py-0.5 rounded-md transition duration-300"
            >
              {item.text}
            </Link>
          ))}
          <a
            href="mailto:propertymanager@clutchindustries.com"
            target="_blank"
            className="hover:bg-gray-100 px-2 py-0.5 rounded-md transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="tel:+15035077605"
            target="_blank"
            className="hover:bg-gray-100 px-2 py-0.5 rounded-md transition duration-300"
          >
            503-507-7605
          </a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
