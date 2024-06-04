"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "../_providers/StoreProvider";
import Image from "next/image";
import "./App.css";
const ProductDetail = ({ id }) => {
  const productData = async () => {
    try {
      await GlobalApi.getProductById(id).then((res) => {
        setProduct(res?.data?.data);
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const [product, setProduct] = useState(null);
  const { addToCart } = useStore();
  useEffect(() => {
    productData();
  }, []);
  const addProductToCart = (item) => {
    addToCart(item);
    toast.success("Product added to Cart !", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };

  return (
    <div className="untree_co-section">
      <div className="container">
        <ToastContainer />
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="h3 mb-3">Product Detail</h3>
                <div className="col-12">
                  <img
                    width={400}
                    height={150}
                    src={
                      `${process.env.NEXT_PUBLIC_BASE_URL}${product?.attributes?.ProductImage?.data?.attributes?.url}` ||
                      "/default-image.jpg"
                    }
                    className="img-fluid product-detail"
                    alt="Furni"
                  />
                  <h3 className="product-title">
                    {product?.attributes?.ProductName}
                  </h3>
                  <p> {product?.attributes?.Description}</p>
                  <strong className="product-price">
                    ETB {product?.attributes?.Price}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5 mb-md-0">
            <button
              className="btn btn-primary mt-8"
              onClick={() => addProductToCart(product)}
            >
              <span className="icon-cross">
                <Image
                  width={12}
                  height={10}
                  src="/images/cross.svg"
                  className="img-fluid"
                  alt="Furni"
                />
              </span>
              &nbsp; Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
