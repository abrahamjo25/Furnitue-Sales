"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";

const Hero = ({ title, isShop }) => {
  const heroData = async () => {
    try {
      await GlobalApi.getHero().then((res) => {
        setHero(res?.data?.data?.attributes);
      });
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };

  const [hero, setHero] = useState(null);
  const heroImageUrl = hero?.HeroImage?.data?.attributes?.url;
  const fullImageUrl = heroImageUrl
    ? `${process.env.NEXT_PUBLIC_BASE_URL}${heroImageUrl}`
    : "/default-image.jpg";
  useEffect(() => {
    heroData();
  }, []);
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h2 className="text-white">{isShop ? title : hero?.Motto}</h2>
              <p className="mb-4">{!isShop ? hero?.Description : ""}</p>
              {!isShop && (
                <p>
                  <Link
                    href="/furniture/shop"
                    className="btn btn-secondary me-2"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="/furniture/shop"
                    className="btn btn-white-outline"
                  >
                    Explore
                  </Link>
                </p>
              )}
            </div>
          </div>
          {!isShop && (
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <Image
                  src={fullImageUrl}
                  unoptimized={true}
                  width={800}
                  height={150}
                  className="img-fluid"
                  alt="Hero"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
