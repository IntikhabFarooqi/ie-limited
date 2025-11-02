"use client";

import Hero from "../Components/UI/Hero";
import Navbar from "../Components/UI/Navbar";
import Services from "../Components/UI/Services";
import Solution from "../Components/UI/Solution";
import WhyChooseUs from "../Components/UI/WhyChooseUs";
import Footer from "../Components/UI/Footer";
import AboutUs from "../Components/UI/AboutUs";
import Collaborate from "../Components/UI/Collaborate";
import Slider from "../Components/UI/Slider";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Solution />
      {/* <Facts />
      <Pricing />
      <Work /> */}
      {/* <FAQs /> */}
      {/* <Blog /> */}
      <Collaborate />
      <Footer />

      {/* FAQ Schema Markup - Only for Home Page */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        id="faq-schema"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do you develop a mobile app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We follow a step-by-step mobile app development process which includes: • Understanding your requirements • Creating wireframes and UI/UX design • Developing the app using the right technology • Testing thoroughly for bugs and performance • Deploying on App Stores (iOS & Android) We also offer post-launch support and updates.",
              },
            },
            {
              "@type": "Question",
              name: "What is an SEO service?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO (Search Engine Optimization) is a set of strategies used to improve your website's visibility on search engines like Google. Our SEO services include: • Keyword research • On-page optimization (like content and meta tags) • Technical SEO improvements • Off-page SEO (backlinks) • Regular performance reports The goal is to increase traffic and generate more leads or sales for your business.",
              },
            },
            {
              "@type": "Question",
              name: "How much does it cost to develop a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website development cost varies depending on: • The number of pages • Features required (e.g. e-commerce, blog, contact forms) • Design complexity • Custom functionality Typically, basic websites start from $100, while more advanced websites can cost more. Contact us for a free quote based on your needs.",
              },
            },
            {
              "@type": "Question",
              name: "What are the top 3 social media platforms?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The top 3 social media platforms currently are: Facebook – Great for reaching a broad audience and running ads Instagram – Ideal for visual content and brand engagement LinkedIn – Best for B2B networking and professional services We help businesses grow their online presence through tailored social media marketing strategies.",
              },
            },
          ],
        })}
      </Script>

      <Script
        id="review-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Glonect",
          url: "https://logisoltech.com",
          email: "info@logisol.tech",
          telephone: "+1-626-671-6483",
          sameAs: [
            "https://clutch.co/profile/logisol-technologies",
            "https://www.trustpilot.com/review/logisoltech.com",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: 15,
            bestRating: "5",
            worstRating: "1",
          }
        })}
      </Script>
    </div>
  );
}
