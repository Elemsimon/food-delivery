import Clients from "@/components/Clients";
import Dishes from "@/components/Dishes";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Order from "@/components/Order";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Dishes />
      <Order />
      <Clients />
      <Newsletter />
      <Footer />
    </div>
  );
}
