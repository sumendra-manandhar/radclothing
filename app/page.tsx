"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Hero from "@/pages/hero";

import Homepage from "@/pages/homepage";
import MessageSection from "@/pages/messageSection";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    // <div classNameName="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main classNameName="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       classNameName="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div classNameName="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 classNameName="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p classNameName="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           classNameName="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           classNameName="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div classNameName="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         classNameName="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           classNameName="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         classNameName="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>

    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      {/* <div classNameName="mx-auto max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl">
        The best way to grow is to
        <PointerHighlight>
          <span>collaborate</span>
        </PointerHighlight>
      </div> */}
      <Hero />
      <Homepage />

      {/* -------------- */}

      {/* ------------- */}

      <div className="bg-base-100 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-20">
            {/* <!-- Left content --> */}
            <div className="w-full max-w-lg">
              <div className="space-y-4">
                <p className="text-primary text-sm font-medium uppercase">
                  Social Proof
                </p>
                <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                  Create Impactful White Label Reports
                </h2>
                <p className="text-base-content/80 text-lg">
                  Craft customizable reports that showcase your campaign's
                  success, align with your brand, and simplify sharing insights
                  with stakeholders while enabling data export and ROI analysis.
                </p>
              </div>

              <div className="mt-11 flex flex-col gap-6">
                <ul className="text-base-content space-y-6 text-lg font-medium">
                  <li className="flex items-center space-x-2">
                    <span className="icon-[tabler--circle-check] size-6 rtl:rotate-y-180"></span>
                    <span>Powerful Campaign Tracking & ROI Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="icon-[tabler--circle-check] size-6 rtl:rotate-y-180"></span>
                    <span>Customizable Reporting & Data Exportation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Right content - Dashboard mockup --> */}
            <div>
              <img
                src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/social-proof/widget.png"
                alt="Social Widget"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------- */}

      <h1 className="text-3xl font-semibold text-center mx-auto">
        Our Latest Creations
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works - each piece crafted with
        intention, emotion, and style.
      </p>

      <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
        <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Prompt engineers</h1>
            <p className="text-sm">
              Bridging the gap between human intent and machine understanding
              through expert prompt design.
            </p>
          </div>
        </div>
        <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-right"
            src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Data scientists</h1>
            <p className="text-sm">
              Bridging the gap between human intent and machine understanding
              through expert prompt design.
            </p>
          </div>
        </div>
        <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Software engineers</h1>
            <p className="text-sm">
              Bridging the gap between human intent and machine understanding
              through expert prompt design.
            </p>
          </div>
        </div>
      </div>
      {/* --------- */}

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <h1 className="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins">
        New Arrivals
      </h1>
      <p className="text-slate-600 mb-10 font-poppins text-center">
        Explore the latest additions to our collection.
      </p>
      <section className="flex flex-wrap items-center justify-center gap-6">
        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
            src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 29.00</p>
        </a>
        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 39.00</p>
        </a>
        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 29.00</p>
        </a>
        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 49.00</p>
        </a>
      </section>

      <Sectiontestimonial />
      <MessageSection />

      <FAQ />
      <Footer />
    </>
  );
}
const Sectiontestimonial = () => {
  const testimonials = [
    {
      text: "PrebuiltUI allowed our team to move quickly and confidently - clean design, solid structure, and ready for production.",
      name: "Cristofer Levin",
      role: "Frontend engineer",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      text: "Using PrebuiltUI saved us time while keeping the design sharp and consistent. These components are built for real products.",
      name: "Jason Kim",
      role: "Product designer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      text: "PrebuiltUI struck the perfect balance between speed and quality. Every components are well crafted and production-ready.",
      name: "Michael Chen",
      role: "Backend engineer",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      text: "We shipped faster with PrebuiltUI, and the design quality never took a hit. The components feel reliable and polished.",
      name: "Sofia Martinez",
      role: "UI/UX designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
      </style>

      <section className="bg-zinc-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-medium text-neutral-800">
              Our Testimonials
            </h1>
            <p className="text-base/6 text-neutral-600 max-w-sm mt-2 mx-auto md:mx-0">
              See what our customers are saying as they build and launch
              projects at lightning speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-5">
            {/* Image Card - spans 2 rows */}
            <div className="md:row-span-2 relative rounded-lg overflow-hidden mx-auto md:mx-0 w-80">
              <img
                src="https://assets.prebuiltui.com/images/components/feature-sections/feature-person-img.png"
                alt="Testimonial"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-11.5 rounded-full bg-white/40 flex items-center justify-center cursor-pointer">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 13.193A1.5 1.5 0 0 1 0 11.894V1.502a1.5 1.5 0 0 1 2.25-1.3l9 5.197c1 .577 1 2.02 0 2.598z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/10 rounded-b-lg backdrop-blur-sm p-5">
                <div className="flex gap-1.5 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.435.693c.3-.922 1.603-.922 1.902 0l1.294 3.982a1 1 0 0 0 .951.691h4.188c.968 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.294 3.983c.3.921-.755 1.687-1.538 1.118l-3.388-2.462a1 1 0 0 0-1.176 0L4.41 15.856c-.784.57-1.838-.197-1.539-1.118l1.294-3.983a1 1 0 0 0-.363-1.118L.414 7.175c-.784-.569-.38-1.809.588-1.809H5.19a1 1 0 0 0 .95-.69z"
                          fill="#fff7ed"
                        />
                      </svg>
                    ))}
                </div>
                <p className="text-sm/5.5 text-neutral-50">
                  PrebuiltUI components helped us move faster without
                  sacrificing design quality.
                </p>
              </div>
            </div>

            {/* 4 Testimonial Cards */}
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg hover:shadow-sm transition-all duration-300 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1.5 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.435.693c.299-.922 1.602-.922 1.902 0l1.294 3.982a1 1 0 0 0 .95.691h4.189c.968 0 1.371 1.24.588 1.81l-3.389 2.461a1 1 0 0 0-.363 1.118l1.294 3.983c.3.921-.755 1.687-1.539 1.118l-3.387-2.462a1 1 0 0 0-1.176 0L4.41 15.856c-.784.57-1.838-.197-1.539-1.118l1.294-3.983a1 1 0 0 0-.363-1.118L.414 7.175c-.784-.569-.38-1.809.588-1.809H5.19a1 1 0 0 0 .95-.69z"
                            fill="#ff8904"
                          />
                        </svg>
                      ))}
                  </div>
                  <p className="text-sm/5.5 text-neutral-600">{item.text}</p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
      </style>
      <div className="bg-black pt-20 px-4">
        <footer className="bg-white w-full max-w-[1350px] mx-auto text-black pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
            <div className="lg:col-span-3 space-y-6">
              <a href="https://prebuiltui.com" className="block">
                <svg
                  width="31"
                  height="33"
                  viewBox="0 0 31 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.349 4.55 7.098 3.884 7.098-3.885M8.35 27.83v-7.755l-7.1-3.886m28.394 0-7.099 3.885v7.754M1.676 8.658l13.771 7.546 13.77-7.546M15.448 31.25V16.189m14.197 5.976V10.212c0-.524-.147-1.039-.424-1.492a3.1 3.1 0 0 0-1.154-1.093L17.024 1.65a3.3 3.3 0 0 0-1.577-.4 3.3 3.3 0 0 0-1.577.4L2.828 7.627A3.07 3.07 0 0 0 1.674 8.72a2.87 2.87 0 0 0-.424 1.492v11.953c0 .524.147 1.04.424 1.493s.675.83 1.154 1.092l11.042 5.977c.48.262 1.023.4 1.577.4a3.3 3.3 0 0 0 1.577-.4l11.042-5.977c.48-.262.877-.639 1.154-1.092s.423-.969.424-1.493"
                    stroke="#262626"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <p className="text-sm/6 text-neutral-600 max-w-96">
                PrebuiltUI helps you build faster by transforming your design
                vision into fully functional, production-ready UI components.
              </p>
              <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                {/* X (Twitter) */}
                <a href="#" className="text-neutral-600 hover:text-neutral-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                {/* Github */}
                <a href="#" className="text-neutral-600 hover:text-neutral-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                {/* Linkedin */}
                <a href="#" className="text-neutral-600 hover:text-neutral-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* Youtube */}
                <a href="#" className="text-neutral-600 hover:text-neutral-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-neutral-600 hover:text-neutral-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
              {/* Products */}
              <div>
                <h3 className="font-medium text-sm mb-4">Products</h3>
                <ul className="space-y-3 text-sm text-neutral-800">
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Components
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Icons
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-medium text-sm mb-4">Resources</h3>
                <ul className="space-y-3 text-sm text-neutral-800">
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      PrebuiltUI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Components
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Store
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-medium text-sm mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-neutral-800">
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Vision
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a href="#" className="hover:text-neutral-700">
                      Careers
                    </a>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-400 text-neutral-700">
                      HIRING
                    </span>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neutral-700">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-300 flex justify-between items-center">
            <p className="text-neutral-600 text-sm">© 2025 PrebuiltUI Design</p>
            <p className="text-sm text-neutral-600">All right reserved.</p>
          </div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-slate-100 rounded-full blur-[100px] pointer-events-none" />
            <h1 className=" text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#D4D4D4] mt-6">
              PrebuiltUI
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in the Starter plan?",
      answer:
        "The Starter plan includes access to all basic features, 5GB of storage, and email support. It's perfect for individuals and small projects.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for all our plans. No credit card is required to start.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time from your account settings.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use industry-standard encryption and security protocols to ensure your data is safe and protected at all times.",
    },
    {
      question: "How does the 2% donation work?",
      answer:
        "We pledge to donate 2% of our annual revenue to environmental causes and non-profit organizations.",
    },
    {
      question: "Can I integrate this platform with other tools?",
      answer:
        "Yes, we offer seamless integration with popular tools like Slack, Trello, and Google Workspace.",
    },
    {
      question: "What makes your platform different?",
      answer:
        "Our platform is built with a focus on user experience, speed, and reliability, ensuring you get the best results with minimal effort.",
    },
  ];

  return (
    <>
      <style>
        {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
      </style>

      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-5xl">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-neutral-900 text-center md:text-start mb-4">
              Most asked FAQ's
            </h2>
            <p className="text-neutral-800 max-w-[416px] text-sm text-center md:text-start mx-auto md:mx-0">
              We're here to help you and solve doubts. Find answers to the most
              common questions below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className={`bg-slate-50 p-3.5 rounded-lg cursor-pointer transition-all duration-300 border border-slate-200 hover:bg-slate-100 ${openIndex === index ? "row-span-2" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-800">
                    {faq.question}
                  </span>
                  <div
                    className={`text-slate-400 p-1 rounded transition-colors ${openIndex === index ? "bg-slate-200 text-slate-500" : "hover:bg-slate-300 hover:text-slate-500"}`}
                  >
                    {openIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-minus"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plus"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
