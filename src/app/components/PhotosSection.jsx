"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import livingRoom1 from "../../../public/images/living-room-1.png";
import livingRoom2 from "../../../public/images/living-room-2.png";
import livingRoom3 from "../../../public/images/living-room-3.png";
import livingRoom4 from "../../../public/images/living-room-4.png";
import kitchen1 from "../../../public/images/kitchen-1.png";
import kitchen2 from "../../../public/images/kitchen-2.png";
import kitchen3 from "../../../public/images/kitchen-3.png";
import bedroom1 from "../../../public/images/bedroom-1.png";
import bedroom2 from "../../../public/images/bedroom-2.png";
import bedroom3 from "../../../public/images/bedroom-3.png";
import bedroom4 from "../../../public/images/bedroom-4.png";
import bedroom5 from "../../../public/images/bedroom-5.png";
import bathroom1 from "../../../public/images/bathroom-1.png";
import bathroom2 from "../../../public/images/bathroom-2.png";
import laundry1 from "../../../public/images/laundry-1.png";
import laundry2 from "../../../public/images/laundry-2.png";
import ImageCard from "./ImageCard";

const livingAreaImages = [
  { src: livingRoom1, alt: "Living room" },
  { src: livingRoom2, alt: "Living room" },
  { src: livingRoom3, alt: "Living room" },
  { src: livingRoom4, alt: "Living room" },
];

const kitchenImages = [
  { src: kitchen1, alt: "Kitchen" },
  { src: kitchen2, alt: "Kitchen" },
  { src: kitchen3, alt: "Kitchen" },
];

const bedroomImages = [
  { src: bedroom1, alt: "Bedroom" },
  { src: bedroom2, alt: "Bedroom" },
  { src: bedroom3, alt: "Bedroom" },
  { src: bedroom4, alt: "Bedroom" },
  { src: bedroom5, alt: "Bedroom" },
];

const bathroomImages = [
  { src: bathroom1, alt: "Bathroom" },
  { src: bathroom2, alt: "Bathroom" },
];

const laundryImages = [
  { src: laundry1, alt: "Laundry" },
  { src: laundry2, alt: "Laundry" },
];

export default function PhotosSection() {
  const [activeSection, setActiveSection] = useState("living-area");

  const livingAreaRef = useRef(null);
  const kitchenRef = useRef(null);
  const bedroomsRef = useRef(null);
  const bathroomsRef = useRef(null);
  const laundryRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [
      livingAreaRef,
      kitchenRef,
      bedroomsRef,
      bathroomsRef,
      laundryRef,
    ];

    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

  return (
    <section className="flex flex-col w-full lg:flex-row gap-5 text-lg">
      <div className="flex flex-col w-full lg:w-1/3 pl-5">
        <div className="flex flex-col w-full lg:sticky lg:top-0 pt-5">
          <h1 className="text-5xl mb-10">Photos</h1>
          <Link
            href="#living-area"
            className={`border-b py-3 cursor-pointer lg:hover:text-primaryAccent transition duration-300 ${
              activeSection === "living-area"
                ? "text-primaryDark border-primaryDark text-xl"
                : "text-gray-400"
            }`}
          >
            Living Area
          </Link>
          <Link
            href="#kitchen"
            className={`border-b py-3 cursor-pointer lg:hover:text-primaryAccent transition duration-300 ${
              activeSection === "kitchen"
                ? "text-primaryDark border-primaryDark text-xl"
                : "text-gray-400"
            }`}
          >
            Kitchen
          </Link>
          <Link
            href="#bedrooms"
            className={`border-b py-3 cursor-pointer lg:hover:text-primaryAccent transition duration-300 ${
              activeSection === "bedrooms"
                ? "text-primaryDark border-primaryDark text-xl"
                : "text-gray-400"
            }`}
          >
            Bedrooms
          </Link>
          <Link
            href="#bathrooms"
            className={`border-b py-3 cursor-pointer lg:hover:text-primaryAccent transition duration-300 ${
              activeSection === "bathrooms"
                ? "text-primaryDark border-primaryDark text-xl"
                : "text-gray-400"
            }`}
          >
            Bathrooms
          </Link>
          <Link
            href="#laundry"
            className={`border-b py-3 cursor-pointer lg:hover:text-primaryAccent transition duration-300 ${
              activeSection === "laundry"
                ? "text-primaryDark border-primaryDark text-xl"
                : "text-gray-400"
            }`}
          >
            Laundry
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-2/3 overflow-hidden gap-5 lg:gap-y-10 pt-5 pl-5 lg:pl-0">
        <div
          id="living-area"
          className="flex flex-col gap-5 w-full lg:gap-0"
          ref={livingAreaRef}
        >
          <h3 className="lg:hidden text-2xl pt-5">Living Area</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5 scrollbar scrollbar-thumb-primaryAccent scrollbar-track-transparent pb-1">
            {livingAreaImages.map((item, index) => (
              <ImageCard item={item} key={index} />
            ))}
          </div>
        </div>

        <div
          id="kitchen"
          className="flex flex-col gap-5 w-full lg:gap-0"
          ref={kitchenRef}
        >
          <h3 className="lg:hidden text-2xl pt-5">Kitchen</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5 scrollbar scrollbar-thumb-primaryAccent scrollbar-track-transparent pb-1">
            {kitchenImages.map((item, index) => (
              <ImageCard item={item} key={index} />
            ))}
          </div>
        </div>

        <div
          id="bedrooms"
          className="flex flex-col gap-5 w-full lg:gap-0"
          ref={bedroomsRef}
        >
          <h3 className="lg:hidden text-2xl pt-5">Bedrooms</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5 scrollbar scrollbar-thumb-primaryAccent scrollbar-track-transparent pb-1">
            {bedroomImages.map((item, index) => (
              <ImageCard item={item} key={index} />
            ))}
          </div>
        </div>

        <div
          id="bathrooms"
          className="flex flex-col gap-5 w-full lg:gap-0"
          ref={bathroomsRef}
        >
          <h3 className="lg:hidden text-2xl pt-5">Bathrooms</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5 scrollbar scrollbar-thumb-primaryAccent scrollbar-track-transparent pb-1">
            {bathroomImages.map((item, index) => (
              <ImageCard item={item} key={index} />
            ))}
          </div>
        </div>

        <div
          id="laundry"
          className="flex flex-col gap-5 w-full lg:gap-0"
          ref={laundryRef}
        >
          <h3 className="lg:hidden text-2xl pt-5">Laundry</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5 scrollbar scrollbar-thumb-primaryAccent scrollbar-track-transparent pb-1">
            {laundryImages.map((item, index) => (
              <ImageCard item={item} key={index} />
            ))}
          </div>
        </div>

        <p className="text-xs pt-5">
          Disclaimer: The images provided are for illustrative purposes only and
          may not represent the exact layout, design, or features of the actual
          apartments. Please refer to the leasing office for specific details
          and availability.
        </p>
      </div>
    </section>
  );
}
