import React, { Suspense, lazy } from "react";
import HeroSection from "../components/HeroSection";
import { Helmet } from "react-helmet-async";

const StatsSection = lazy(() => import("../components/StatsSection"));
const ServiceSection = lazy(() => import("../components/ServiceSection"));
const MarketsSection = lazy(() => import("../components/MarketsSection"));
const PortfolioSection = lazy(() => import("../components/PortfolioSection"));
const CtaBanner = lazy(() => import("../components/CtaBanner"));
const ApproachSection = lazy(() => import("../components/ApproachSection"));
const ToolsSection = lazy(() => import("../components/ToolsSection"));
const BlogSection = lazy(() => import("../blogs/BlogSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));

export default function Main() {
  return (
    <>
      <Helmet>
        <title>HJ Sysweb - Digital Marketing in India: SEO, Websites, Ads</title>
        <meta
          name="description"
          content="We help businesses grow with SEO, conversion-ready websites, and performance ads. Clear plans, weekly sprints, and dashboards that tie spend to leads, sales, and ROI."
        />
      </Helmet>

      <HeroSection />
      
      <Suspense fallback={<div style={{minHeight: '20vh'}}></div>}>
        <StatsSection />
        <ServiceSection />
        <MarketsSection />
        <PortfolioSection />
        <CtaBanner
          headingSmall="Want to Grow your Business?"
          headingLarge="Turn Traffic Into Revenue"
          description="Share your website and monthly goal, we’ll reply with a short action plan."
          buttonText="Send Details"
          buttonLink="/contact-us"
        />
        <ApproachSection />
        <ToolsSection />
        <BlogSection/>
        <Testimonials />
      </Suspense>
    </>
  );
}
