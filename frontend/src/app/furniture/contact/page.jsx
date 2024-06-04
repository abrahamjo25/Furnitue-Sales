import Contact from "@/app/_components/Contact";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <Hero title="Contact Us" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
