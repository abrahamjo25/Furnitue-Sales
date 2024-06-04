"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "../_providers/StoreProvider";

const Header = () => {
  const currentPath = usePathname();
  const { cart } = useStore();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/furniture/shop", label: "Shop" },
    { href: "/furniture/about", label: "About us" },
    { href: "/furniture/services", label: "Services" },
    { href: "/furniture/blogs", label: "Blog" },
    { href: "/furniture/contact", label: "Contact us" },
  ];

  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand tex-2xl text-bold" href="/">
        Modern<span>.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`nav-item ${
                  currentPath === link.href ? "nav-item active" : ""
                }`}
              >
                <Link className="nav-link" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <Image
                  src="/images/user.svg"
                  width={25}
                  height={20}
                  alt="User"
                />
              </a>
            </li>
            <li>
              <Link className="nav-link" href="/furniture/cart">
                <Image
                  src="/images/cart.svg"
                  width={25}
                  height={20}
                  alt="Cart"
                />
                <span
                  class="badge badge-light text-lg"
                  style={{ backgroundColor: "red" }}
                >
                  {cart?.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
