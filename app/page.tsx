import HeroBanner from "@/components/HeroBanner";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen">
      <HeroBanner />
      <PopularCategories />
    </main>
  );
}