import About from "@/app/_components/About";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <Hero
        title="About Us"
      />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
