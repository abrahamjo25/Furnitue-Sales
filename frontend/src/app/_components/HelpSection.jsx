import React from "react";
import Image from "next/image";
import Link from "next/link";
const HelpSection = () => {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <Image
                  width={800}
                  height={620}
                  src="/images/img-grid-1.jpg"
                  alt="Untree.co"
                />
              </div>
              <div className="grid grid-2">
                <Image
                  width={800}
                  height={220}
                  src="/images/img-grid-2.jpg"
                  alt="Untree.co"
                />
              </div>
              <div className="grid grid-3">
                <Image
                  width={800}
                  height={475}
                  src="/images/img-grid-3.jpg"
                  alt="Untree.co"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Transform your space with our expertly crafted furniture and
              decor. Our modern designs blend style and functionality, making it
              easy to create the perfect interior. Discover pieces that suit
              your taste and elevate your home.
            </p>
            <ul className="list-unstyled custom-list my-4">
              <li>Expertly designed furniture for every room</li>
              <li>High-quality materials and craftsmanship</li>
              <li>Unique styles to match your aesthetic</li>
              <li>Dedicated to enhancing your living space</li>
            </ul>
            <p>
              <Link href="/furniture/shop" className="btn">
                Explore
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
