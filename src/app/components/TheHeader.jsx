import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="flex flex-col">
      <nav className="flex flex-row items-start w-full justify-between z-50 absolute top-0 h-[var(--header-height)] border p-5">
        <div className="flex w-fit">
          <Link href="/" className="flex">
            Broadway Town Square Logo
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
