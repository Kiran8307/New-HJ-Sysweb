// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RootLayout from "./layouts/RootLayout";

import Main from "./pages/Main";

// Lazy load other non-critical routes to reduce main JS bundle size
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const AuditPage = React.lazy(() => import("./pages/Audit"));
const IndustriesPage = React.lazy(() => import("./pages/Industries"));
const CareerPage = React.lazy(() => import("./pages/Career"));
const PortfolioPage = React.lazy(() => import("./pages/Portfolio"));
const CaseStudiesPage = React.lazy(() => import("./pages/CaseStudies"));
const CaseStudySingle = React.lazy(() => import("./pages/CaseStudySingle"));
const ServicesPage = React.lazy(() => import("./pages/Services"));
const ServiceSinglePage = React.lazy(() => import("./pages/ServiceSingle"));
const BlogListPage = React.lazy(() => import("./pages/BlogListPage"));
const BlogDetailPage = React.lazy(() => import("./pages/BlogDetailPage"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ThankYouPage = React.lazy(() => import("./pages/ThankYouPage"));
const SubService = React.lazy(() => import("./pages/SubService"));
const LocationPage = React.lazy(() => import("./components/Locationcites/LocationPage"));
const CityServiceDetail = React.lazy(() => import("./components/Locationcites/CityServiceDetail"));

const SITE_URL = "https://www.hjsysweb.com";

export default function App() {
  return (
    <>
      <Helmet>
        <title>HJ Sysweb</title>
        <meta
          name="description"
          content="We help businesses grow with SEO, conversion-ready websites, and performance ads. Clear plans, weekly sprints, and dashboards that tie spend to leads, sales, and ROI."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HJ Sysweb" />
        <meta property="og:title" content="HJ Sysweb" />
        <meta
          property="og:description"
          content="We help businesses grow with SEO, conversion-ready websites, and performance ads. Clear plans, weekly sprints, and dashboards that tie spend to leads, sales, and ROI."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/hj-favicon.svg`} />
      </Helmet>

      <RootLayout>
        <React.Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', background: '#0a0a0a'}}></div>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/audit" element={<AuditPage />} />
            <Route path="/industries-we-serve" element={<IndustriesPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudySingle />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceSinglePage />} />
            <Route path="/services/:id/:subId" element={<SubService />} />
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFound />} />
            
            {/* CITY ROUTES */}
            <Route path="/location/:cityId" element={<LocationPage />} />
          
            {/* All city Services  */}
            <Route path="/location/:cityId/:serviceId" element={<CityServiceDetail />} />
            
          </Routes>
        </React.Suspense>
      </RootLayout>
    </>
  );
}