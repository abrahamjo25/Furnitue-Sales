"use client";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ProductDetail from "@/app/_components/ProductDetail";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const param = useParams();
  return (
    <div>
      <Header />
      <ProductDetail id={param.product} />
    </div>
  );
};

export default Page;
