"use client";

import floorPlanA from "../../../public/images/BTS-PLAN-A.png";
import floorPlanB from "../../../public/images/BTS-PLAN-B.png";
import Image from "next/image";
import { useState } from "react";

export default function FloorPlansSection() {
  const [selectedLayout, setSelectedLayout] = useState("A");

  const layoutA = {
    imageUrl: floorPlanA,
    amenities: [
      "2 bedrooms",
      "2 bathrooms",
      "living room",
      "washer",
      "dryer",
      "deck",
      "dishwasher",
    ],
    sqFeet: 1156,
    sqMeter: 107,
    priceMin: "1695",
    priceMax: "2195",
    available: true,
  };

  const layoutB = {
    imageUrl: floorPlanB,
    amenities: [
      "2 bedrooms",
      "2 bathrooms",
      "living room",
      "washer",
      "dryer",
      "deck",
      "dishwasher",
      "storage closet",
    ],
    sqFeet: 1078,
    sqMeter: 100,
    priceMin: "1695",
    priceMax: "2195",
    available: true,
  };

  const currentLayout = selectedLayout === "A" ? layoutA : layoutB;

  return (
    <section className="flex flex-col lg:flex-row lg:gap-10 text-lg">
      <div className="flex flex-col w-full lg:w-1/3">
        <div className=" flex flex-col gap-2"></div>
        <h1 className="text-5xl lg:text-6xl 2xl:text-7xl mb-10">Floor Plans</h1>
        <p
          className={`border-b py-3 cursor-pointer lg:hover:text-primaryAccent transition duration-300 ${
            selectedLayout === "A"
              ? "text-primaryDark border-primaryDark"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedLayout("A")}
        >
          Layout A
        </p>
        <p
          className={`border-b py-3 cursor-pointer lg:hover:text-primaryAccent transition duration-300 ${
            selectedLayout === "B"
              ? "text-primaryDark border-primaryDark"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedLayout("B")}
        >
          Layout B
        </p>

        <div className="flex flex-col gap-2 py-3 mt-10 border-b border-gray-400 ">
          <h6>Price</h6>
          <p className="text-4xl">
            ${currentLayout.priceMin}-${currentLayout.priceMax}/mo
          </p>
        </div>

        <div className="flex flex-col gap-2 py-3 mt-10 border-b border-gray-400 ">
          <h6>Interior Area</h6>
          <p className="text-4xl">
            {currentLayout.sqFeet} ft² / {currentLayout.sqMeter} m²
          </p>
        </div>

        <div className="hidden lg:flex py-3 mt-10 border-b border-gray-400">
          <p>{currentLayout.amenities.join(", ")}</p>
        </div>

        <div className="lg:hidden flex flex-col">
          <Image
            src={currentLayout.imageUrl}
            alt={`Layout ${selectedLayout}`}
            className="w-auto h-auto mt-10"
          />
          <div className="py-3 mt-10 border-b border-gray-400">
            <p>{currentLayout.amenities.join(", ")}</p>
          </div>
        </div>
      </div>

      <div className="hidden relative lg:flex flex-col w-full lg:w-2/3">
        <Image
          src={currentLayout.imageUrl}
          alt={`Layout ${selectedLayout}`}
          className="w-auto h-auto"
        />

        {currentLayout.available ? (
          <div className="absolute top-0 right-0 p-5 flex flex-row gap-2 text-base">
            <p className="bg-green-900 px-2 py-0.5 h-fit w-fit rounded-md text-primaryLight p-2">
              Available
            </p>
            <a
              href="mailto:propertymanager@clutchindustries.com"
              target="_blank"
              className="bg-gray-100 px-2 py-0.5 h-fit w-fit rounded-md"
            >
              Apply Now
            </a>
          </div>
        ) : (
          <div className="absolute top-0 right-0 p-5 flex flex-row gap-2 text-base">
            <p className="bg-gray-100 px-2 py-0.5 h-fit w-fit rounded-md">
              Not Available
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
