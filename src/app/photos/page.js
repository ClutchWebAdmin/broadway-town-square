import PhotosSection from "../components/PhotosSection";

export const metadata = {
  title: "Photos | Broadway Town Square Apartments",
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

export default function PhotosPage() {
  return (
    <main className="mt-[var(--headerHeightMobile)] lg:mt-[var(--headerHeightDesktop)] pt-5 pb-10">
      <PhotosSection />
    </main>
  );
}
