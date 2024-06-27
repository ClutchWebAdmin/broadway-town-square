import Image from "next/image";

export default function ImageCard({ item }) {
  return (
    <Image
      src={item.src}
      alt={item.alt}
      className="flex w-5/6 lg:min-w-[550px] xl:min-w-[750px] 2xl:min-w-[850px] h-auto object-cover"
      priority
      placeholder="blur"
    />
  );
}
