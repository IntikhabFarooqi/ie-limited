"use client";

import { useState } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import { font } from "../Components/Font/font";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { useCallback } from "react";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import ServicesCategory from "../Components/UI/ServicesCategory";
import Collaborate from "../Components/UI/Collaborate";
import { motion } from "framer-motion";
import Script from "next/script";
import Image from "next/image";

export default function ITEquipmentServices() {
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
            IT Equipment & <span className="text-cyan-400">Services</span>
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
                  src="/servers-data-center.jpg"
                  alt="IT Equipment and Services"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <div className="text-md md:text-sm text-gray-900 leading-relaxed">
                <h2 className="text-2xl font-bold text-[#283A64] mb-4">
                  Your Trusted Source for Enterprise-Grade IT Solutions
                </h2>
                <p className="mb-4">
                  Through our partnerships with leading global distributors, we
                  provide genuine products from top IT brands such as{" "}
                  <span className="text-cyan-400">
                    Apple, Dell, HP, Lenovo, Cisco, and Microsoft
                  </span>{" "}
                  — ensuring competitive pricing, full manufacturer warranty
                  support, and fast delivery.
                </p>
                <p className="mb-4">
                  Whether you need to equip a single office or set up an entire
                  data center, we've got you covered. Our comprehensive IT
                  solutions combine quality hardware with expert services to
                  keep your business running at peak performance.
                </p>
              </div>
            </div>

            {/* Our Product Range --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our <span className="text-cyan-400">Product</span> Range
              </h2>
              <p className="text-md md:text-sm mb-6">
                We offer a comprehensive selection of IT equipment to meet the
                needs of businesses of all sizes:
              </p>
              <div className="space-y-6">
                {/* Monitors & Screens */}
                <div>
                  <h3 className="text-lg font-bold mb-1">Monitors & Screens</h3>
                  <p className="text-md md:text-sm mb-3">
                    High-resolution business monitors, interactive displays, and
                    professional panels for enhanced productivity and
                    collaboration.
                  </p>
                  <div className="flex flex-row max-md:flex-col">
                    <Image
                      src="/it-services/monitor.webp"
                      alt="monitor"
                      width={1000}
                      height={1000}
                      className="w-2/4 h-auto"
                    />
                    <Image
                      src="/it-services/monitor-2.webp"
                      alt="monitor2"
                      width={1000}
                      height={1000}
                      className="w-2/4 h-auto"
                    />
                  </div>
                </div>

                {/* Desktop PCs & Workstations */}
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Desktop PCs & Workstations
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    From everyday office desktops to high-performance
                    engineering and creative workstations tailored to your
                    specific requirements.
                  </p>
                  <Image
                    src="/it-services/desktop.jpg"
                    alt="desktop"
                    width={1000}
                    height={1000}
                    className="w-1/4 h-auto"
                  />
                </div>

                {/* Laptops & Ultrabooks */}
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Laptops & Ultrabooks
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Lightweight and powerful devices for business mobility,
                    ensuring your team stays productive anywhere.
                  </p>
                  <div className="flex flex-row max-md:flex-col">
                    <Image
                      src="/it-services/laptop.webp"
                      alt="laptop"
                      width={1000}
                      height={1000}
                      className="w-2/4 h-auto"
                    />
                    <Image
                      src="/it-services/laptop2.jpg"
                      alt="laptop2"
                      width={1000}
                      height={1000}
                      className="w-2/4 h-auto"
                    />
                  </div>
                </div>

                {/* Data Center Hardware */}
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Data Center Hardware
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Racks, enclosures, and enterprise-grade storage solutions to
                    build robust data infrastructure.
                  </p>
                  <Image
                    src="/it-services/data-center.avif"
                    alt="data-center"
                    width={1000}
                    height={1000}
                    className="w-3/4 h-auto rounded-2xl"
                  />
                </div>

                {/* Servers */}
                <div>
                  <h3 className="text-lg font-bold mb-1">Servers</h3>
                  <p className="text-md md:text-sm mb-3">
                    Tower, rack, and blade servers to power your business
                    applications with reliability and scalability.
                  </p>
                  <Image
                    src="/it-services/server.png"
                    alt="server"
                    width={1000}
                    height={1000}
                    className="w-3/4 h-auto rounded-2xl"
                  />    
                </div>

                {/* Networking Equipment */}
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Networking Equipment
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Routers, switches, firewalls, and wireless access points to
                    create secure and efficient network infrastructure.
                  </p>
                  <Image
                    src="/it-services/networking.jpg"
                    alt="networking"
                    width={1000}
                    height={1000}
                    className="w-3/4 h-auto rounded-2xl"
                  />
                </div>

                {/* Printers & Scanners */}
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Printers & Scanners
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Office printers, multifunction devices, and high-speed
                    scanners for all your document management needs.
                  </p>
                  <div className="flex flex-row max-md:flex-col">
                    <Image
                      src="/it-services/printer.jpg"
                      alt="printer"
                      width={1000}
                      height={1000}
                      className="w-2/4 h-auto"
                    />
                    <Image
                      src="/it-services/priner2.jpg"
                      alt="printer2"
                      width={1000}
                      height={1000}
                      className="w-2/4 h-auto"
                    />
                  </div>
                </div>

                {/* Peripherals & Accessories */}
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Peripherals & Accessories
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Keyboards, mice, docking stations, webcams, and more to
                    complete your IT setup.
                  </p>
                </div>
              </div>

              <Image
                src="/it-services/products.png"
                alt="products"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-2xl"
              />
            </section>

            {/* Our IT Services --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our <span className="text-cyan-400">IT Services</span>
              </h2>
              <p className="text-md md:text-sm mb-6">
                Beyond supplying hardware, we provide complete IT services to
                keep your business running smoothly:
              </p>
              <div className="space-y-6">
                {/* Server Installation & Configuration */}
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Server Installation & Configuration
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    On-premises or cloud-integrated setups tailored to your
                    business requirements with professional deployment and
                    optimization.
                  </p>
                </div>

                {/* IT Network Design & Deployment */}
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    IT Network Design & Deployment
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Secure and scalable wired/wireless networks designed for
                    optimal performance and future growth.
                  </p>
                </div>

                {/* Data Backup & Disaster Recovery */}
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Data Backup & Disaster Recovery
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Protection for critical business information with automated
                    backup solutions and comprehensive disaster recovery
                    planning.
                  </p>
                </div>

                {/* Cybersecurity Solutions */}
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Cybersecurity Solutions
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Firewalls, endpoint security, and intrusion prevention
                    systems to protect your business from cyber threats.
                  </p>
                </div>

                {/* IT Maintenance & Support */}
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    IT Maintenance & Support
                  </h3>
                  <p className="text-md md:text-sm mb-3">
                    Remote and on-site troubleshooting, maintenance, and
                    technical support to minimize downtime.
                  </p>
                </div>

                {/* Cloud Integration */}
                <div>
                  <h3 className="text-xl font-bold mb-1">Cloud Integration</h3>
                  <p className="text-md md:text-sm mb-3">
                    Microsoft 365, Azure, Google Workspace, and hybrid solutions
                    for seamless cloud transformation.
                  </p>
                </div>
              </div>
              <Image
                src="/it-services/network.jpg"
                alt="Software Licensing"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-2xl"
              />
              <div className="flex flex-row gap-4 my-4">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Get a Free Quote
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </section>

            {/* Software & Licensing --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Software & <span className="text-cyan-400">Licensing</span>
              </h2>
              <p className="text-md md:text-sm mb-6">
                We provide genuine software licenses from trusted vendors to
                match your hardware and business requirements:
              </p>
              <div className="space-y-6">
                {/* Software List */}
                <div>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Microsoft 365 Business & Enterprise
                      </span>{" "}
                      – Complete productivity suite with cloud collaboration
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Windows Server & SQL Server
                      </span>{" "}
                      – Enterprise server operating systems and database
                      solutions
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        VMware & Virtualization Solutions
                      </span>{" "}
                      – Advanced virtualization and cloud infrastructure
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Cisco Networking & Security Licenses
                      </span>{" "}
                      – Professional networking and security software
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Antivirus & Endpoint Protection
                      </span>{" "}
                      – Bitdefender, ESET, and other leading security solutions
                    </li>
                  </ul>
                </div>

                {/* Partners */}
                <div className="flex flex-row items-center gap-x-2 max-md:flex-col">
                  <img src="/it-services/microsoft.png" alt="microsoft" />
                  <img src="/it-services/cisco.png" alt="cisco" />
                  <img src="/it-services/vmware.png" alt="vmware" />
                </div>

                <div className="flex flex-row gap-4 mb-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get Software Quote
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Why Choose Us? --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why <span className="text-cyan-400">Choose Us?</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    What Makes Us Different:
                  </h3>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Authorized Supply Channels
                      </span>{" "}
                      – We source directly from trusted global distributors
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Competitive Pricing
                      </span>{" "}
                      – Access to wholesale rates and special offers
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Expert Support
                      </span>{" "}
                      – Skilled technicians ready to assist at every stage
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        End-to-End Solutions
                      </span>{" "}
                      – From planning and procurement to installation and
                      maintenance
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Genuine Products
                      </span>{" "}
                      – Full manufacturer warranty support on all equipment
                    </li>
                    <li>
                      <span className="text-[#283A64] font-semibold">
                        Fast Delivery
                      </span>{" "}
                      – Quick turnaround times to keep your business moving
                    </li>
                  </ul>
                </div>

                <Image
                  src="/it-services/server-room.avif"
                  alt="server-room"
                  width={1000}
                  height={1000}
                  className="w-full h-auto rounded-2xl"
                />

                <div className="flex flex-row gap-4 mb-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Contact Our Experts
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            {/* <Testimonials /> */}

            {/* FAQ Section */}
            {/* <ITEquipmentFAQ /> */}

            {/* Get Started Today --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64] uppercase"
                style={{ lineHeight: "1.15" }}
              >
                Get Started <span className="text-cyan-400">Today</span>
              </h2>
              <p className="text-md md:text-sm mb-4">
                Whether you're upgrading your office, setting up a new branch,
                or deploying enterprise infrastructure, we deliver the
                equipment, services, and expertise you need.
              </p>
              <p className="text-md md:text-sm mb-6">
                📞 <span className="font-semibold">Call us now</span> or 📧{" "}
                <span className="font-semibold">send us an inquiry</span> to get
                a free quote.
              </p>
              <div className="flex flex-row gap-4 mb-4">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Get Free Quote
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
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

      {/* <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What IT brands do you supply?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We supply genuine products from leading IT brands including Apple, Dell, HP, Lenovo, Cisco, Microsoft, and many others through authorized distribution channels.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide warranty support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our products come with full manufacturer warranty support. We work directly with brands to ensure you get complete warranty coverage.",
              },
            },
            {
              "@type": "Question",
              name: "Can you handle large enterprise orders?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We can handle everything from single office setups to complete data center deployments with competitive enterprise pricing.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide installation services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer complete installation and configuration services including server setup, network deployment, and ongoing technical support.",
              },
            },
            {
              "@type": "Question",
              name: "What software licenses do you provide?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide genuine licenses for Microsoft 365, Windows Server, VMware, Cisco solutions, antivirus software, and other enterprise applications.",
              },
            },
            {
              "@type": "Question",
              name: "How quickly can you deliver equipment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Delivery times vary by product and quantity, but we maintain strong relationships with distributors to ensure fast turnaround times for most orders.",
              },
            },
          ],
        })}
      </Script> */}

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "IT Equipment & Services",
          description:
            "Your trusted source for enterprise-grade IT solutions including hardware supply, installation, support, and software licensing from leading brands like Apple, Dell, HP, Lenovo, Cisco, and Microsoft.",
          serviceType: "IT Equipment Supply and Services",
          provider: {
            "@type": "Organization",
            name: "Glonect",
            url: "https://glonect.ae/it-equipment-and-services/",
            logo: "https://glonect.ae/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              email: "info@glonect.ae",
              contactType: "Customer Support",
              availableLanguage: ["English"],
            },
          },
          areaServed: {
            "@type": "Place",
            name: "United States",
          },
          url: "https://glonect.ae/it-equipment-and-services/",
        })}
      </Script>
    </div>
  );
}

// function Testimonials() {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.7,
//         type: "spring",
//       },
//     }),
//   };

//   const testimonials = [
//     {
//       quote:
//         "Logisol provided us with a complete IT infrastructure upgrade. Their team handled everything from server installation to network configuration. The project was completed on time and within budget.",
//       name: "Michael Chen",
//       title: "IT Director, TechStart Solutions",
//     },
//     {
//       quote:
//         "We needed enterprise-grade equipment fast, and Logisol delivered. Their competitive pricing and genuine warranties gave us confidence in our investment. Excellent service throughout.",
//       name: "Sarah Johnson",
//       title: "Operations Manager, DataFlow Corp",
//     },
//     {
//       quote:
//         "The ongoing support from Logisol has been exceptional. They not only supplied our hardware but continue to provide maintenance and technical support that keeps our systems running smoothly.",
//       name: "David Rodriguez",
//       title: "CTO, InnovateHub",
//     },
//   ];

//   return (
//     <section className="w-full">
//       <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-8">
//         What <span className="text-cyan-400">Clients</span> Are Saying
//       </h2>
//       <div className="flex flex-col gap-8 max-w-4xl mx-auto">
//         {testimonials.map((t, i) => (
//           <motion.div
//             key={t.name}
//             className="rounded-2xl border border-gray-300 bg-gradient-to-br from-[#e9eaf3] to-[#d3d7e6] shadow-lg p-8"
//             custom={i}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={cardVariants}
//           >
//             <div className="flex justify-center mb-4">
//               {[...Array(5)].map((_, idx) => (
//                 <FaStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
//               ))}
//             </div>
//             <p className="text-gray-800 text-sm md:text-md mb-6 text-center">
//               {t.quote}
//             </p>
//             <div className="text-center mt-4">
//               <div className="font-bold text-lg text-[#283A64]">{t.name}</div>
//               <div className="text-gray-600 text-sm">{t.title}</div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function ITEquipmentFAQ() {
//   const faqs = [
//     {
//       question: "What IT brands do you supply?",
//       answer:
//         "We supply genuine products from leading IT brands including Apple, Dell, HP, Lenovo, Cisco, Microsoft, and many others through authorized distribution channels.",
//     },
//     {
//       question: "Do you provide warranty support?",
//       answer: "Yes, all our products come with full manufacturer warranty support. We work directly with brands to ensure you get complete warranty coverage.",
//     },
//     {
//       question: "Can you handle large enterprise orders?",
//       answer: "Absolutely. We can handle everything from single office setups to complete data center deployments with competitive enterprise pricing.",
//     },
//     {
//       question: "Do you provide installation services?",
//       answer: "Yes, we offer complete installation and configuration services including server setup, network deployment, and ongoing technical support.",
//     },
//     {
//       question: "What software licenses do you provide?",
//       answer: "We provide genuine licenses for Microsoft 365, Windows Server, VMware, Cisco solutions, antivirus software, and other enterprise applications.",
//     },
//     {
//       question: "How quickly can you deliver equipment?",
//       answer:
//         "Delivery times vary by product and quantity, but we maintain strong relationships with distributors to ensure fast turnaround times for most orders.",
//     },
//   ];

//   const [openIdx, setOpenIdx] = useState(0);

//   return (
//     <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
//       <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-8 text-center">
//         Frequently Asked Questions (<span className="text-cyan-400">FAQs</span>)
//       </h2>
//       <div className="flex flex-col gap-5">
//         {faqs.map((faq, idx) => {
//           const open = openIdx === idx;
//           return (
//             <div
//               key={idx}
//               className={`border border-gray-300 rounded-2xl bg-white transition-all duration-300 ${
//                 open ? "shadow-lg" : ""
//               }`}
//             >
//               <button
//                 className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
//                 onClick={() => setOpenIdx(open ? null : idx)}
//                 aria-expanded={open}
//                 aria-controls={`faq-panel-${idx}`}
//               >
//                 <span className="font-bold text-lg md:text-xl text-[#283A64]">
//                   {faq.question}
//                 </span>
//                 <span className="ml-4">
//                   {open ? (
//                     <FaMinusCircle className="text-[#283A64] text-2xl" />
//                   ) : (
//                     <FaPlusCircle className="text-cyan-400 text-2xl" />
//                   )}
//                 </span>
//               </button>
//               <div
//                 id={`faq-panel-${idx}`}
//                 className={`px-6 pb-5 text-gray-800 text-base transition-all duration-300 ${
//                   open ? "block" : "hidden"
//                 }`}
//               >
//                 {faq.answer}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
