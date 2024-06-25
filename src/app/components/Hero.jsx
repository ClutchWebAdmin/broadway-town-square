import Image from "next/image";
import placeholder from "../../../public/images/hero.png";

export default function Hero() {
  return (
    <section className="h-svh relative flex">
      <Image
        src={placeholder}
        alt="placeholder"
        className="w-full h-full object-cover"
      />
    </section>
  );
}
