import Hero from "./components/Hero";

export const metadata = {
  title: "Broadway Town Square Apartments | 1127 Broadway St E",
  description: "1127 Broadway St E, Salem, Oregon, 97301",
  keywords:
    "salem oregon apartments, downtown salem apartments, downtown salem living, 2 bedroom apartments salem oregon, 2 bedroom 2 bath apartments downtown salem",
  openGraph: {
    title: "Broadway Town Square Apartments | 1127 Broadway St E",
    description: "1127 Broadway St E, Salem, Oregon, 97301",
    siteName: "Broadway Town Square Apartments",
    type: "website",
    locale: "en_US",
    url: "https://broadwaytownsquare.com",
    images: [
      {
        url: "https://broadwaytownsquare.com/images/og-image.png",
        alt: "Broadway Town Square Apartments",
      },
    ],
  },
  images: [
    {
      url: "https://broadwaytownsquare.com/images/og-image.png",
      alt: "Broadway Town Square Apartments",
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
