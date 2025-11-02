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
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Script from "next/script";

export default function MobileDevelopmentServices() {
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
           
            <span className="text-cyan-400">
              <br />
              Educational <br />
            </span>{" "}
            Services
          </h1>
          
        </div>
      </section>

      <Slider />

      <section className="relative w-full bg-white flex flex-col md:flex-row items-start justify-center max-lg:p-6 lg:px-8 lg:py-8">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left: Main Content (Image/Intro + Why Stand Out) */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Image and Description */}
            <div>
              <div className="rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img
                  src="/computers.jpg"
                  alt="Web Development Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <div className="text-md md:text-sm text-gray-900 leading-relaxed">
                <p className="mb-4">
                 
                As video technology evolves, universities and colleges must stay competitive and relevant by adopting cutting edge solutions. Glonect is revolutionizing the way universities incorporate video into their classrooms with solutions that send live and file-based broadcast quality video from lecture halls, campus events and university television stations over low bandwidth IP connections all for a low cost.

                  <br />
                  <br />
                 
                  Armed with a laptop running the Software Encoder, students will be able to capture and encode live video from the field and send it over low-bandwidth IP connections. Our products can easily overcome the challenges of distance learning. By using our innovative ACT-L3 technology classrooms all over the world can have reliable live video interaction. Our cost-effective encoding and decoding products make the opportunities for distance learning with Integrated affordable and accessible to anyone.

<br />
                  <br />
                  
                  Already adopted by major news organizations; students, faculty, and schools now have the opportunity to learn and apply this award-winning technology.

</p>
              </div>
            </div>

          

           
          

            
            
           
          </div>
          {/* Right: Sticky Services Category Card (md and up only) */}
          <div className="hidden lg:block flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
            <ServicesCategory />
          </div>
        </div>
      </section>
      {/* On mobile, show ServicesCategory at the bottom before Collaborate */}
      <div className="z-20 block lg:hidden w-full max-lg:p-6">
        <ServicesCategory />
      </div>
      <Collaborate />
      <Footer />

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Web Development Services",
          description:
            "At Glonect, we create websites that don’t just look good — they help your business work better. Whether you’re just starting or already running a large company, we build websites that match your business goals.",
          url: "https://logisol.tech/custom-web-development-services/",
          image: "https://logisol.tech/services/web-development/hero.webp",
          serviceType: "Custom Web Development",
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          provider: {
            "@type": "Organization",
            name: "Glonect",
            url: "https://logisol.tech",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            sameAs: [
              "https://www.facebook.com/logisol.tech/",
              "https://www.instagram.com/logisol.tech/",
              "https://www.linkedin.com/company/logisol-technologies",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              contactType: "Customer Service",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "USA",
            },
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Priya Nandakumar",
              },
              reviewBody:
                "I was impressed not only by the technical skill but also by how approachable and collaborative the team was. They made complex decisions feel easy and guided us through every step without overwhelming us with jargon. The final website reflects our brand perfectly and has been well received by both clients and staff. It’s rare to find a team that combines professionalism with such a human touch.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Jonathan Cruz",
              },
              reviewBody:
                "From start to finish, the development process was smooth and well-managed. The team was incredibly responsive to our feedback and brought creative solutions to the table that elevated our online presence. What stood out most was their attention to detail and genuine interest in helping our business grow. We've seen a noticeable improvement in user engagement since the new site went live.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Amanda Lee",
              },
              reviewBody:
                "Working with the team on our new website was a seamless and genuinely enjoyable experience. They took the time to understand our vision, offered thoughtful suggestions, and delivered a site that truly represents who we are as a company. The communication was clear throughout, deadlines were met, and the final product exceeded our expectations in both design and functionality. I would confidently recommend their services to anyone looking for a professional and dependable development partner.",
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the typical timeline for a custom web development project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Timelines vary based on complexity, features, and client responsiveness. A typical project can range from 3–6 months for smaller applications to 9–12+ months for large-scale enterprise solutions. We provide a detailed timeline during the discovery phase.",
              },
            },
            {
              "@type": "Question",
              name: "How much does custom web development cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Costs are highly variable, depending on project scope, features, design complexity, and integrations. We provide transparent, itemized quotes after a thorough discovery phase.",
              },
            },
            {
              "@type": "Question",
              name: "Can you integrate our new custom website with our existing CRM/ERP/marketing automation tools?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Seamless integration with your current business systems is a key advantage of custom web development. We specialize in API integrations.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of ongoing support and maintenance do you offer after launch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer various post-launch support packages, including proactive maintenance, security updates, performance monitoring, bug fixes, and continuous optimization based on your evolving needs.",
              },
            },
            {
              "@type": "Question",
              name: "How involved will my team be in the development process?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Client involvement is crucial. We maintain clear communication channels and provide regular updates, encouraging your feedback at every stage through agile sprints and dedicated client portals.",
              },
            },
            {
              "@type": "Question",
              name: "Is custom web development suitable for small businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. If a small business has unique operational needs, specific long-term goals, or aims for significant competitive differentiation, custom development can be a highly strategic investment.",
              },
            },
          ],
        })}
      </Script>
    </div>
  );
}

function WebDevFAQ() {
  const faqs = [
    {
      question:
        "What is the typical timeline for a custom web development project?",
      answer:
        "Timelines vary based on complexity, features, and client responsiveness. A typical project can range from 3–6 months for smaller applications to 9–12+ months for large-scale enterprise solutions. We provide a detailed timeline during the discovery phase.",
    },
    {
      question: "How much does custom web development cost?",
      answer: (
        <div className="space-y-2">
          <p>
            Costs are highly variable, depending on project scope, features,
            design complexity, and integrations. We provide transparent,
            itemized quotes after a thorough discovery phase.
          </p>
          <p className="italic text-sm">
            <strong>Differentiation Opportunity:</strong> Consider an
            interactive ‘Project Cost Estimator’ or ‘Discovery Questionnaire’ as
            a lead generation tool.
          </p>
        </div>
      ),
    },
    {
      question:
        "Can you integrate our new custom website with our existing CRM/ERP/marketing automation tools?",
      answer:
        "Absolutely. Seamless integration with your current business systems is a key advantage of custom web development. We specialize in API integrations.",
    },
    {
      question:
        "What kind of ongoing support and maintenance do you offer after launch?",
      answer: (
        <div className="space-y-2">
          <p>
            We offer various post-launch support packages, including proactive
            maintenance, security updates, performance monitoring, bug fixes,
            and continuous optimization based on your evolving needs.
          </p>
          <p className="italic text-sm">
            <strong>Expert Tip:</strong> Budget for ongoing maintenance and
            optimization.
          </p>
        </div>
      ),
    },
    {
      question: "How involved will my team be in the development process?",
      answer: (
        <div className="space-y-2">
          <p>
            Client involvement is crucial. We maintain clear communication
            channels and provide regular updates, encouraging your feedback at
            every stage through agile sprints and dedicated client portals.
          </p>
          <p className="italic text-sm">
            <strong>Expert Tip:</strong> Don’t compromise on clear
            communication.
          </p>
        </div>
      ),
    },
    {
      question: "Is custom web development suitable for small businesses?",
      answer:
        "Yes, if a small business has unique operational needs, specific long-term goals, or aims for significant competitive differentiation, custom development can be a highly strategic investment.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-4xl md:text-3xl text-[#283A64] mb-8 text-center">
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
                className={`px-6 pb-5 text-gray-800 text-base transition-all duration-300 ${
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
        "I was impressed not only by the technical skill but also by how approachable and collaborative the team was. They made complex decisions feel easy and guided us through every step without overwhelming us with jargon. The final website reflects our brand perfectly and has been well received by both clients and staff. It’s rare to find a team that combines professionalism with such a human touch.",
      name: "Priya Nandakumar",
      title: "Founder & Creative Lead, Studio Nanda",
    },
    {
      quote:
        "From start to finish, the development process was smooth and well-managed. The team was incredibly responsive to our feedback and brought creative solutions to the table that elevated our online presence. What stood out most was their attention to detail and genuine interest in helping our business grow. We've seen a noticeable improvement in user engagement since the new site went live.",
      name: "Jonathan Cruz",
      title: "Operations Manager, Evergreen Supply Co.",
    },
    {
      quote:
        "Working with the team on our new website was a seamless and genuinely enjoyable experience. They took the time to understand our vision, offered thoughtful suggestions, and delivered a site that truly represents who we are as a company. The communication was clear throughout, deadlines were met, and the final product exceeded our expectations in both design and functionality. I would confidently recommend their services to anyone looking for a professional and dependable development partner.",
      name: "Amanda Lee",
      title: "Marketing Director, BrightPath Consulting",
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
