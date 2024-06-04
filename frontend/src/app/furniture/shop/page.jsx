import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Products from "@/app/_components/Products";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      {/* <Hero title="Shop" isShop={true} /> */}
      <Products isShop={true} num={100} isSearch={true}/>
      <Footer />
    </div>
  );
};

export default Page;
