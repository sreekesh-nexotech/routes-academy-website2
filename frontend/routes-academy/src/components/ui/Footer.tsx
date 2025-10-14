"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";
import Facebook from "../../../public/images/Facebook.svg";
import Instagram from "../../../public/images/Instagram.svg";
import Twitter from "../../../public/images/Twitter.svg";
import YouTube from "../../../public/images/YouTube.svg";
import LinkedIn from "../../../public/images/LinkedIn.svg";

const Footer = () => {
  const courseLinks = [
    { href: "#", label: "Data and Analytics" },
    { href: "#", label: "Finance, Accounting & ERP" },
    { href: "#", label: "AI, ML& Cloud" },
    { href: "#", label: "Digital Marketing & Growth" },
    { href: "#", label: "Communication" },
  ];

  const supportLinks = [
    { href: "#", label: "Getting started" },
    { href: "#", label: "Help center" },
    { href: "#", label: "Careers" },
  ];

  const companyLinks = [
    { href: "#", label: "About" },
    { href: "#", label: "Contact us" },
    { href: "#", label: "Report a bug" },
  ];
  return (
    <footer>
      <div className="grid sm:grid-cols-2  lg:grid-cols-4 p-[1rem] sm:p-[5rem]">
        <div>
          <div className="flex-shrink-0 mb-[2.75rem]">
            <Image
              src={logo}
              alt="Routes Accademy Logo"
              width={89}
              height={26}
            />
          </div>
          <p className="font-normal text-neutral-700 text-[1.125rem] leading-[1.75rem] mb-[2.75rem]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <div className="flex gap-[1rem] mb-[6rem]">
            <Link href="#">
              <Image
                src={Facebook}
                alt="Facebook Logo"
                width={36}
                height={36}
              />
            </Link>
            <Link href="#">
              <Image src={Twitter} alt="Twitter Logo" width={36} height={36} />
            </Link>
            <Link href="#">
              <Image
                src={Instagram}
                alt="Instagram Logo"
                width={36}
                height={36}
              />
            </Link>
            <Link href="#">
              <Image
                src={LinkedIn}
                alt="LinkedIn Logo"
                width={36}
                height={36}
              />
            </Link>
            <Link href="#">
              <Image src={YouTube} alt="YouTube Logo" width={36} height={36} />
            </Link>
          </div>
        </div>
        <div className="mb-[3.875rem] sm:mb-0">
          <h5 className="text-[1.3125rem] leading-[3rem] text-blue-900 font-semibold">
            Courses
          </h5>
          {courseLinks.map((link) => (
            <div key={link.label}>
              <Link
                className="font-normal text-neutral-600 text-[1rem] leading-[2.2rem]"
                href={link.href}
              >
                {link.label}
              </Link>
              <br />
            </div>
          ))}
        </div>
        <div className="hidden sm:block ">
          <h5 className="text-[1.3125rem] leading-[3rem] text-blue-900 font-semibold">
            Support
          </h5>
          {supportLinks.map((link) => (
            <div key={link.label}>
              <Link
                className="font-normal text-neutral-600 text-[1rem] leading-[2.2rem]"
                href={link.href}
              >
                {link.label}
              </Link>
              <br />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:block">
          <div>
            <h5 className="text-[1.3125rem] leading-[3rem] text-blue-900 font-semibold">
              Company
            </h5>
            {companyLinks.map((link) => (
              <div key={link.label}>
                <Link
                  className="font-normal text-neutral-600 text-[1rem] leading-[2.5rem]"
                  href={link.href}
                >
                  {link.label}
                </Link>
                <br />
              </div>
            ))}
          </div>
          <div className="sm:hidden">
            <h5 className="text-[1.3125rem] leading-[3rem] text-blue-900 font-semibold">
              Support
            </h5>
            {supportLinks.map((link) => (
              <div key={link.label}>
                <Link
                  className="font-normal text-neutral-600 text-[1rem] leading-[2.2rem]"
                  href={link.href}
                >
                  {link.label}
                </Link>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[2rem] pb-[1rem] mt-[2rem]">
        <p className="text-neutral-700 font-normal text-[1rem] leading-[1.5rem]">
          © {new Date().getFullYear()} ROUTE | Terms | Privacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
