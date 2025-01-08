import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Plans from "@/components/Plans";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Featured />
        <Plans />
      </main>
      <Footer />
    </>
  );
}
