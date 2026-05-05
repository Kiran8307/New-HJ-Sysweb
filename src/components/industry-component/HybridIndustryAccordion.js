import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./hybrid-accordion.module.css";
// import { Link } from "react-router-dom";

export default function HybridIndustryAccordion({ items, parentImg }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  if (!items || items.length === 0) return null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((item, idx) => {
          const isOpen = activeIndex === idx;
          const bgImg = parentImg || "/Industry/fashion.webp";
          const safeBgImg = bgImg.replace(/ /g, "%20").replace(/&/g, "%26");

          return (
            <div
              key={idx}
              className={`${styles.row} ${isOpen ? styles.open : ""}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(isOpen ? -1 : idx)}
            >
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url("${safeBgImg}")` }}
              ></div>
              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.icon}>{isOpen ? "−" : "+"}</div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={styles.body}
                    >
                      <div className={styles.bodyInner}>
                        <p className={styles.desc}>
                          {item.desc || `We provide specialized end-to-end technical solutions and expert consulting tailored specifically for the ${item.title} sector.`}
                        </p>

                        <div className={styles.pointsGrid}>
                          {(item.points || [
                            "Strategic Market Analysis",
                            "Custom Growth Planning",
                            "Digital Presence Audit",
                          ]).map((point, pIdx) => (
                            <div key={pIdx} className={styles.pointItem}>
                              <span className={styles.pointIcon}>✓</span>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
