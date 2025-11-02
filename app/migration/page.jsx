"use client";

import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Collaborate from "../Components/UI/Collaborate";
import { font } from "../Components/Font/font";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { useCallback } from "react";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import ServicesCategory from "../Components/UI/ServicesCategory";
import { useState } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaLightbulb,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Script from "next/script";

export default function ProfessionalVideoEditingServices() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
      },
    }),
  };

  return (
    <div className={font.className}>
      <Navbar />
      {/* Hero/Main Section */}
      <section className="relative h-[29rem] max-sm:h-[20rem] bg-white overflow-hidden flex flex-col items-center justify-center">
        {/* Particles.js Background */}
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className={`${headingFont.className} text-[80px] max-lg:text-[60px] max-md:text-[30px] text-[#283A64] text-center mb-6`}
          >
            Migration <span className="text-cyan-400">Services</span>
          </h1>
          
        </div>
      </section>
      <Slider />
      <section className="relative w-full bg-white flex flex-col md:flex-row items-start justify-center max-lg:p-6 lg:px-8 lg:py-8">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left: Main Content (Image/Intro + Why Stand Out) */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Image and Description */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/postproduction.jpg"
                  alt="Graphics Designing Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
            </div>
            {/* Professional Graphics Design That Helps Your Business Grow */}
            <section>
              
              <div className="text-sm md:text-md text-gray-900 leading-relaxed">
                <p className="mb-4">
                Broadcasting digital migration simply defined means the migration of the broadcasting services from analogue broadcasting technology to digital technologies. The primary objective of digital migration is to clear the radio frequency spectrum currently occupied by broadcasters to enable the provision of wireless mobile broadband services and other innovative applications. Therefore STBs are to be used in the transition to enable free to air broadcasting services to migrate from analogue to digital television and will not be a permanent feature in the free to air broadcasting system.
                </p>
                
              </div>
              
            </section>

          </div>
          {/* Right: Sticky Services Category Card (md and up only) */}
          <div className="hidden lg:block flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
            <ServicesCategory />
          </div>
        </div>
      </section>
      {/* On mobile, show ServicesCategory at the bottom before Collaborate */}
      <div className="block lg:hidden w-full px-8 md:px-16 lg:px-24 mt-8">
        <ServicesCategory />
      </div>
      <Collaborate />
      <Footer />

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How fast will I receive my designs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Usually within 1–3 business days, depending on the project size.",
              },
            },
            {
              "@type": "Question",
              name: "Do you really give unlimited revisions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! We keep working on your design until you are happy — no extra charge.",
              },
            },
            {
              "@type": "Question",
              name: "What file types do I get?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You’ll receive AI, PSD, PNG, JPG, and PDF. We can send other formats if needed.",
              },
            },
            {
              "@type": "Question",
              name: "What if I don’t like the first design?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No problem — we’ll share other ideas and revise the design until it’s right for you.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Glonect",
                url: "https://logisol.tech/graphics-designing-services/",
              },
              author: { "@type": "Person", name: "Emily Carter" },
              reviewBody:
                "Working with Glonect was a game-changer for our brand visuals. Their graphic design team created clean, professional materials that perfectly aligned with our identity. From brochures to social media creatives, everything looked sharp and on-point.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "BluePeak Real Estate",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Glonect",
                url: "https://logisol.tech/graphics-designing-services/",
              },
              author: { "@type": "Person", name: "Michael Thompson" },
              reviewBody:
                "We hired Logisol for a complete branding package, and they absolutely delivered. The designs were fresh, modern, and visually compelling. Their team is skilled, responsive, and genuinely understands how design drives user engagement.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "Sparkline Tech Solutions",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Glonect",
                url: "https://logisol.tech/graphics-designing-services/",
              },
              author: { "@type": "Person", name: "Sarah Mitchell" },
              reviewBody:
                "Our company needed a range of graphics for digital courses and promotional content. Logisol’s designers quickly understood our vision and created assets that were both beautiful and functional. Their creativity and attention to detail truly stood out.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "BrightPath Learning Co.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Graphics Designing Services",
          description:
            "Boost your brand with expert graphics designing services. From custom logos to marketing visuals, we deliver designs that attract, engage, and convert.",
          provider: {
            "@type": "Organization",
            name: "Glonect",
            url: "https://logisol.tech/graphics-designing-services/",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              contactType: "Customer Service",
              email: "info@logisol.tech",
            },
          },
          serviceType: "Graphics Designing Services",
          url: "https://logisol.tech/graphics-designing-services/",
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            },
          },
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Graphics Designing Services",
          image: "https://logisol.tech/logisol-logo-nav.png",
          description:
            "Boost your brand with expert graphics designing services. From custom logos to marketing visuals, we deliver designs that attract, engage, and convert.",
          brand: {
            "@type": "Organization",
            name: "Glonect",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            url: "https://logisol.tech/graphics-designing-services/",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: 2,
            bestRating: "5",
            worstRating: "1",
          },
          url: "https://logisol.tech/graphics-designing-services/",
          review: [
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
              },
              author: {
                "@type": "Organization",
                name: "Clutch",
                sameAs: "https://clutch.co/profile/logisol-technologies",
              },
              reviewBody:
                "Highly rated for creative and professional graphic design solutions on Clutch. Their design work has consistently impressed clients across industries.",
            },
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
              },
              author: {
                "@type": "Organization",
                name: "Trustpilot",
                sameAs: "https://www.trustpilot.com/review/logisoltech.com",
              },
              reviewBody:
                "Logisol delivers visually stunning designs that align perfectly with our brand. Exceptional attention to detail and client support, as reflected in our Trustpilot reviews.",
            },
          ],
        })}
      </Script>
    </div>
  );
}

function Testimonials() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
      },
    }),
  };

  const testimonials = [
    {
      quote:
        "Working with Glonect was a game-changer for our brand visuals. Their graphic design team created clean, professional materials that perfectly aligned with our identity. From brochures to social media creatives, everything looked sharp and on-point.",
      name: "Emily Carter",
      title: "Marketing Director, BluePeak Real Estate",
    },
    {
      quote:
        "We hired Logisol for a complete branding package, and they absolutely delivered. The designs were fresh, modern, and visually compelling. Their team is skilled, responsive, and genuinely understands how design drives user engagement.",
      name: "Michael Thompson",
      title: "Founder & CEO, Sparkline Tech Solutions",
    },
    {
      quote:
        "Our company needed a range of graphics for digital courses and promotional content. Logisol’s designers quickly understood our vision and created assets that were both beautiful and functional. Their creativity and attention to detail truly stood out.",
      name: "Sarah Mitchell",
      title: "Content & Creative Lead, BrightPath Learning Co.",
    },
  ];

  return (
    <section className="w-full">
      <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-8">
        What <span className="text-cyan-400">Clients</span> Are Saying
      </h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="rounded-2xl border border-gray-300 bg-gradient-to-br from-[#e9eaf3] to-[#d3d7e6] shadow-lg p-8"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
              ))}
            </div>
            <p className="text-gray-800 text-sm md:text-md mb-6 text-center">
              {t.quote}
            </p>
            <div className="text-center mt-4">
              <div className="font-bold text-lg text-[#283A64]">{t.name}</div>
              <div className="text-gray-600 text-sm">{t.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WebDevFAQ() {
  const faqs = [
    {
      question: "How fast will I receive my designs?",
      answer:
        "Usually within 1–3 business days, depending on the project size.",
    },
    {
      question: "Do you really give unlimited revisions?",
      answer:
        "Yes! We keep working on your design until you are happy — no extra charge.",
    },
    {
      question: "What file types do I get?",
      answer:
        "You’ll receive AI, PSD, PNG, JPG, and PDF. We can send other formats if needed.",
    },
    {
      question: "What if I don’t like the first design?",
      answer:
        "No problem — we’ll share other ideas and revise the design until it’s right for you.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-8 text-center">
        Frequently Asked Questions (<span className="text-cyan-400">FAQs</span>)
      </h2>
      <div className="flex flex-col gap-5">
        {faqs.map((faq, idx) => {
          const open = openIdx === idx;
          return (
            <div
              key={idx}
              className={`border border-gray-300 rounded-2xl bg-white transition-all duration-300 ${
                open ? "shadow-lg" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                onClick={() => setOpenIdx(open ? null : idx)}
                aria-expanded={open}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-bold text-lg md:text-xl text-[#283A64]">
                  {faq.question}
                </span>
                <span className="ml-4">
                  {open ? (
                    <FaMinusCircle className="text-[#283A64] text-2xl" />
                  ) : (
                    <FaPlusCircle className="text-cyan-400 text-2xl" />
                  )}
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 pb-5 text-gray-800 text-sm md:text-md transition-all duration-300 ${
                  open ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
