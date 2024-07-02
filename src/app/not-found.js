"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="mt-[var(--headerHeightMobile)] lg:mt-[var(--headerHeightDesktop)] p-5 py-32 text-center">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl lg:text-6xl 2xl:text-7xl mb-10">
          404 Page Not Found
        </h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          <p>The requested page cannot be found.</p>
          <Link
            href={`/`}
            className="hover:bg-gray-100 px-2 py-0.5 rounded-md transition duration-300"
            className="bg-primaryDark hover:bg-gray-100 hover:text-primaryDark transition-colors duration-200 ease-in-out rounded text-primaryLight px-4 py-2 font-medium"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
