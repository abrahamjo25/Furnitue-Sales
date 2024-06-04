"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GlobalApi from "../api/GlobalApi";
const BlogSection = () => {
  const blogData = async () => {
    try {
      await GlobalApi.getBlog().then((res) => {
        setBlog(res?.data?.data);
      });
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    blogData();
  }, []);
  return (
    <div className="blog-section bg-grey">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="#" className="more">
              View All Posts
            </a>
          </div>
        </div>
        <div className="row">
          {blog?.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0" key={index}>
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <Image
                    width={400}
                    height={100}
                    src={
                      `${process.env.NEXT_PUBLIC_BASE_URL}${value?.attributes?.Image?.data?.attributes?.url}` ||
                      "/default-image.jpg"
                    }
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <p>{value?.attributes?.Title}</p>
                  </h3>
                  <div className="meta">
                    <span>
                      {value?.attributes?.Description} on{" "}
                      {new Date(value?.attributes?.createdAt).toDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
