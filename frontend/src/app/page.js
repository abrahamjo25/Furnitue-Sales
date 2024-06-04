"use client";

import { useEffect, useState } from "react";
import BlogSection from "./_components/BlogSection";
import ChooseSection from "./_components/ChooseSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HelpSection from "./_components/HelpSection";
import Hero from "./_components/Hero";
import PopularProducts from "./_components/PopularProducts";
import Products from "./_components/Products";
import GlobalApi from "./api/GlobalApi";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <ChooseSection />
      <HelpSection />
      <PopularProducts />
      <BlogSection />
      <Footer />
    </div>
  );
}
