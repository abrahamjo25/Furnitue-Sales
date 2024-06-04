import ChooseSection from "@/app/_components/ChooseSection";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Products from "@/app/_components/Products";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <Hero title="Services" />
      <ChooseSection />
      <Products />
      <Footer />
    </div>
  );
};

export default Page;
