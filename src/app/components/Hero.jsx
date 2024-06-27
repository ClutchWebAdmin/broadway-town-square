import Image from "next/image";
import placeholder from "../../../public/images/hero.png";

export default function Hero() {
  return (
    <section className="flex flex-row h-svh relative -z-10">
      <Image
        src={placeholder}
        className="w-full h-full object-cover"
        alt="Sketch of Broadway Town Square"
        priority
        placeholder="blur"
      />
      <div className="absolute hidden lg:grid grid-cols-1 lg:grid-cols-3 items-end p-5 w-full h-full text-lg">
        <h3>1127 Broadway St NE</h3>
        <h3 className="justify-center flex">Salem, Oregon</h3>
        <h3 className="justify-end flex">97301</h3>
      </div>

      <div className="absolute grid lg:hidden grid-cols-1 items-end p-5 w-full h-full">
        <h3 className="text-3xl">
          1127 Broadway St NE
          <br />
          Salem, Oregon 97301
        </h3>
      </div>
    </section>
  );
}
