import FloorPlansSection from "../components/FloorPlansSection";

export const metadata = {
  title: "Floor Plans | Broadway Town Square Apartments",
  description: "1127 Broadway St E, Salem, Oregon, 97301",
  keywords:
    "salem oregon apartments, downtown salem apartments, downtown salem living, 2 bedroom apartments salem oregon, 2 bedroom 2 bath apartments downtown salem",
  openGraph: {
    title: "Photos | Broadway Town Square Apartments",
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

export default function FloorPlansPage() {
  return (
    <main className="mt-[var(--headerHeightMobile)] lg:mt-[var(--headerHeightDesktop)] p-5 py-10">
      <FloorPlansSection />
    </main>
  );
}
