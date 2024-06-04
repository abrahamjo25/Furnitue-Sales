import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Thankyou from "@/app/_components/Thankyou";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <Hero isShop={true} />
      <Thankyou />
    </div>
  );
};

export default Page;
