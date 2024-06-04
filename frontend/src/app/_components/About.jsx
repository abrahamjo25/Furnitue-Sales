"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GlobalApi from "../api/GlobalApi";
import Link from "next/link";

const About = () => {
  const ourteamsData = async () => {
    try {
      await GlobalApi.getOurTeams().then((res) => {
        setOurTeams(res?.data?.data);
      });
    } catch (error) {
      console.error("Error fetching ourteams data:", error);
    }
  };

  const [ourteams, setOurTeams] = useState(null);

  useEffect(() => {
    ourteamsData();
  }, []);

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>
        <div className="row">
          {ourteams?.map((value, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={index}>
              <Image
                src={
                  `${process.env.NEXT_PUBLIC_BASE_URL}${value?.attributes?.ProfileImage?.data?.attributes?.url}` ||
                  "/default-image.jpg"
                }
                width={300}
                height={150}
                className="img-fluid mb-5"
                alt="About"
              />
              <h3 className="">{value?.attributes?.Name}</h3>
              <span className="d-block position mb-4">
                {value?.attributes?.Position}
              </span>
              <p>{value?.attributes?.Description}</p>
              <p className="mb-0">
                <Link
                  href={value?.attributes?.AnySocialLink} target="_blank"
                  className="more dark"
                >
                  See More <span className="icon-arrow_forward" />
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
