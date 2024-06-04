"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GlobalApi from "../api/GlobalApi";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import "./App.css";
import Search from "./Search";
import { useStore } from "../_providers/StoreProvider";
const Products = ({ isShop, num, isSearch }) => {
  const productData = async () => {
    try {
      await GlobalApi.getProducts(num).then((res) => {
        setProducts(res?.data?.data);
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const [product, setProducts] = useState(null);
  const { searchElement } = useStore();
  const router = useRouter();
  useEffect(() => {
    productData();
  }, []);

  const searchProduct = async () => {
    if (!searchElement) {
      return;
    }
    try {
      await GlobalApi.searchProduct(searchElement).then((res) => {
        setProducts(res?.data?.data);
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  const viewProduct = (item) => {
    router.push(`/furniture/product/${item?.id}`);
  };
  return (
    <>
      {isSearch && <Search searchProduct={searchProduct} />}
      <div className="product-section">
        <div className="container">
          <div className="row">
            <ToastContainer />
            {!isShop && (
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 className="mb-4 section-title">
                  Crafted with excellent material.
                </h2>
                <p className="mb-4">
                  Live comfortably with our stylish and functional furniture.
                  Transform your home with pieces that combine elegance and
                  durability. Enjoy timeless designs that elevate your living
                  space.
                </p>
                <p>
                  <Link href="/furniture/shop" className="btn">
                    Explore
                  </Link>
                </p>
              </div>
            )}
            {product?.map((value, index) => (
              <div
                className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
                key={index}
              >
                <a className="product-item" onClick={() => viewProduct(value)}>
                  <Image
                    width={400}
                    height={150}
                    src={
                      `${process.env.NEXT_PUBLIC_BASE_URL}${value?.attributes?.ProductImage?.data?.attributes?.url}` ||
                      "/default-image.jpg"
                    }
                    className="img-fluid product-thumbnail"
                    alt="Furni"
                  />
                  <h3 className="product-title">
                    {value?.attributes?.ProductName}
                  </h3>
                  <strong className="product-price">
                    ETB {value?.attributes?.Price}
                  </strong>
                  <span className="icon-cross">
                    <Image
                      width={18}
                      height={10}
                      src="/images/cross.svg"
                      className="img-fluid"
                      alt="Furni"
                    />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
