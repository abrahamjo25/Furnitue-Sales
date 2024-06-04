"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";

const Footer = () => {
  const footerData = async () => {
    try {
      await GlobalApi.getFooter().then((res) => {
        setFooter(res?.data?.data?.attributes);
      });
    } catch (error) {
      console.error("Error fetching footer data:", error);
    }
  };

  const [footer, setFooter] = useState(null);
  const footerImageUrl = footer?.FooterImage?.data?.attributes?.url;
  const fullImageUrl = footerImageUrl
    ? `${process.env.NEXT_PUBLIC_BASE_URL}${footerImageUrl}`
    : "/default-image.jpg";

  useEffect(() => {
    footerData();
  }, []);

  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img">
          <Image
            width={400}
            height={200}
            src={fullImageUrl}
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <Image
                    width={25}
                    height={20}
                    src="/images/envelope-outline.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>
              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa fa-paper-plane" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                Furni<span>.</span>
              </a>
            </div>
            <p className="mb-4">{footer?.FooterDescription}</p>
            <ul className="list-unstyled custom-social">
              <li>
                <a href={footer?.FacebookLink} target="_blank">
                  <span className="fa fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href={footer?.TwitterLink} target="_blank">
                  <span className="fa fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href={footer?.InstagramLink} target="_blank">
                  <span className="fa fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href={footer?.LinkedInLink} target="_blank">
                  <span className="fa fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Knowledge base</a>
                  </li>
                  <li>
                    <a href="#">Live chat</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Our team</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Nordic Chair</a>
                  </li>
                  <li>
                    <a href="#">Kruzo Aero</a>
                  </li>
                  <li>
                    <a href="#">Ergonomic Chair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                {footer?.CopyWrite}
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
