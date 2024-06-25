import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="flex flex-col">
      <nav className="flex flex-row items-start w-full h-fit justify-between p-5">
        <div className="flex w-fit">
          <Link href="/" className="flex">
            Broadway Town Square
          </Link>
        </div>
        <div className="hidden lg:flex flex-row justify-end gap-10 w-fit">
          <Link href="/" className="">
            Link 1
          </Link>
          <Link href="/" className="">
            Link 2
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
