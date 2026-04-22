import { useEffect, useState } from "react";
import "./../components/style/hero.css";
import HeroScroller from "./HeroScroller";

export default function HeroSection() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Defers loading the 15MB video by 1 second to completely free up initial LCP and FCP bandwidth
    const timer = setTimeout(() => setLoadVideo(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero site-gutter">
      {/* looping video background */}
      {loadVideo && (
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/earth-bg.webm" type="video/webm" />
        </video>
      )}

      {/* gradient overlay */}
      {/* <div className="hero-overlay" />   */}

      {/* LEFT: copy */}
      <div className="hero-copy">
        <h1>Turn Your Website into a Sales Engine</h1>
        <p>
          We make your website load faster, and look clearer so more visitors
          take action. Most clients see 40% more enquiries & sales after our
          first round of fixes.
        </p>
        <a className="btn btn-primary hero-cta" href="/audit">
          Optimize Site →
        </a>
      </div>

      {/* RIGHT: tilted collage */}
      <div className="hero-media">
        <HeroScroller />
      </div>
    </section>
  );
}
