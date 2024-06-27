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
      threshold: 0.65,
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
    <section className="flex flex-col lg:flex-row gap-10 text-lg">
      <div className="flex flex-col w-full lg:w-1/3">
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

      <div className="flex flex-col w-full lg:w-2/3 gap-10 pt-5">
        <div
          id="living-area"
          className="flex flex-col gap-5 w-full lg:gap-0"
          ref={livingAreaRef}
        >
          <h3 className="lg:hidden text-2xl">Living Area</h3>
          <div className="flex flex-row gap-5 overflow-x-scroll w-full">
            <Image
              src={livingRoom1}
              alt="Living room"
              className="flex w-full h-auto object-cover"
              priority
              placeholder="blur"
            />
            <Image
              src={livingRoom2}
              alt="Living room"
              className="flex w-full h-auto object-cover"
              priority
              placeholder="blur"
            />
            <Image
              src={livingRoom3}
              alt="Living room"
              className="flex w-full h-auto object-cover"
              priority
              placeholder="blur"
            />
            <Image
              src={livingRoom4}
              alt="Living room"
              className="flex w-full h-auto object-cover"
              priority
              placeholder="blur"
            />
          </div>
        </div>

        <div
          id="kitchen"
          className="flex flex-col w-full gap-5 lg:gap-0"
          ref={kitchenRef}
        >
          <h3 className="lg:hidden text-2xl">Kitchen</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5">
            <Image
              src={kitchen1}
              alt="Kitchen"
              className="flex w-full h-auto object-cover"
              priority
              placeholder="blur"
            />
            <Image
              src={kitchen2}
              alt="Kitchen"
              className="flex w-full h-auto object-cover"
              priority
              placeholder="blur"
            />
            <Image
              src={kitchen3}
              alt="Kitchen"
              className="flex w-full h-auto object-cover"
              priority
              placeholder="blur"
            />
          </div>
        </div>

        <div
          id="bedrooms"
          className="flex flex-col w-full gap-5 lg:gap-0"
          ref={bedroomsRef}
        >
          <h3 className="lg:hidden text-2xl">Bedrooms</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5">
            <Image
              src={bedroom4}
              alt="Bedroom"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
            <Image
              src={bedroom2}
              alt="Bedroom"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
            <Image
              src={bedroom3}
              alt="Bedroom"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
            <Image
              src={bedroom5}
              alt="Bedroom"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
            <Image
              src={bedroom1}
              alt="Bedroom"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          id="bathrooms"
          className="flex flex-col w-full gap-5 lg:gap-0"
          ref={bathroomsRef}
        >
          <h3 className="lg:hidden text-2xl">Bathrooms</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5">
            <Image
              src={bathroom1}
              alt="Bathroom"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
            <Image
              src={bathroom2}
              alt="Bathroom"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          id="laundry"
          className="flex flex-col w-full gap-5 lg:gap-0"
          ref={laundryRef}
        >
          <h3 className="lg:hidden text-2xl">Laundry</h3>
          <div className="flex flex-row w-full overflow-x-scroll gap-5">
            <Image
              src={laundry1}
              alt="Laundry"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
            <Image
              src={laundry2}
              alt="Laundry"
              className="flex w-full h-auto object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <p className="text-xs">
          Disclaimer: The images provided are for illustrative purposes only and
          may not represent the exact layout, design, or features of the actual
          apartments. Please refer to the leasing office for specific details
          and availability.
        </p>
      </div>
    </section>
  );
}
