import React from "react";
import Image from "next/image";
const ChooseSection = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              Experience unparalleled comfort and style with our premium
              furniture collection. Our pieces are crafted to blend seamlessly
              with any decor, providing both functionality and elegance. Trust
              in our commitment to quality and timeless design to transform your
              living space.
            </p>
            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      width={45}
                      height={45}
                      src="/images/truck.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Enjoy fast and free shipping on all orders. We ensure your
                    furniture reaches you promptly and in perfect condition.
                    Experience hassle-free delivery service with every purchase.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      width={45}
                      height={45}
                      src="/images/bag.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Enjoy a seamless shopping experience with our user-friendly
                    website. Browse, select, and purchase your favorite
                    furniture pieces with ease and convenience. Shopping for
                    your home has never been this simple.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      width={45}
                      height={45}
                      src="/images/support.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Our customer support team is available 24/7 to assist you
                    with any questions or concerns. Reach out to us anytime for
                    reliable and friendly service. We're here to help you every
                    step of the way.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <Image
                      width={45}
                      height={45}
                      src="/images/return.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Shop with confidence knowing that our hassle-free return
                    policy has you covered. If you're not completely satisfied
                    with your purchase, returning it is quick and easy. Your
                    satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img-wrap">
              <Image
                width={800}
                height={150}
                src="/images/why-choose-us-img.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
