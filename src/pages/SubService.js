import React, { useMemo } from "react";
import MarketsSection from "../components/MarketsSection";
import CtaBanner from "../components/CtaBanner";
import LogoSlider from "../components/LogoSlider";

import rawClientLogos from "../components/client-logo.json";
import Testimonials from "../components/Testimonials";
import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import { useParams } from "react-router-dom";
import services from "../components/service/service.json";

const logos = (rawClientLogos || []).map((item) => ({
  src: item.logo,
  alt: item.title || "",
}));

const SubService = () => {
  const { id, subId } = useParams();

  const data = useMemo(() => services.find((s) => s.id === id), [id]);

  const subData = useMemo(
    () => data ? data.subServices.find((d) => d.id === subId) : null,
    [data, subId]
  );

  return (
    <>
      <BreadcrumbHero
        title={`${subData.title}`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: `${data.title}`, href: `/services/${data.id}` },
          { label: `${subData.title}` },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />
      <HangingBoard text={`${subData.desc}`} typingSpeed={25} />

      <section className="service-inner mt">
        <header className="inner-hero">
          <div className="inner-hero-text section-top" style={{ textAlign: 'center', padding: '60px 20px' }}>
            {/* Main Title */}
            <h1 className="inner-title h2">
              {subData.title}
            </h1>

            {/* General Description */}
            {subData.innerDesc || subData.desc ? (
              <p className="inner-lead p" style={{ maxWidth: '800px', margin: '0 auto 40px', color: '#aaa', lineHeight: '1.8', textAlign: 'justify' }}>
                {subData.innerDesc || subData.desc}
              </p>
            ) : null}

            {/* Deliverables & Outcome Section */}
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '20px', marginBottom: '15px', textAlign: 'justify' }}>
                <strong style={{ color: '#fff' }}>
                  {((subData.innerPoints || subData.points)?.[0] || "").toLowerCase().includes("what we do") ? "What we do :" : "Deliverables :"}
                </strong>
                <span style={{ color: '#ccc', marginLeft: '10px' }}>
                  {((subData.innerPoints || subData.points)?.[0] || "")
                    .replace(/^(Deliverables\s*:\s*|What\s+we\s+do\s*:\s*)/i, "")}
                </span>
              </p>
              <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                <strong style={{ color: '#fff' }}>Outcome :</strong>
                <span style={{ color: '#ccc', marginLeft: '10px' }}>
                  {((subData.innerPoints || subData.points)?.[1] || "")
                    .replace(/^(Outcome\s*:\s*)/i, "")}
                </span>
              </p>
            </div>
          </div>
        </header>
      </section>

      <MarketsSection />
      <CtaBanner
        headingSmall="Want to Grow your Business?"
        headingLarge="Turn Traffic Into Revenue"
        description="Share your website and monthly goal, we’ll reply with a short action plan."
        buttonText="Send Details"
        buttonLink="/contact-us"
      />

      <LogoSlider speed={100} logos={logos} />

      <Testimonials />
    </>
  );
};

export default SubService;
