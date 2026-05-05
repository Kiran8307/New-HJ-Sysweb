"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./sticky-stack.module.css";
import { industriesData } from "./industriesData";

const COLORS = [
  "#0f172a", // deep slate
  "#2b1653", // purple
  "#3b0f0f", // wine
  "#053a34", // teal
  "#3a2407", // bronze
  "#162a12", // green
  "#3b1b04", // orange
  "#132b3a", // cyan
];

export default function StickyStack({ items = industriesData, isInner = false }) {
  return (
    <section className="mt section-top">
      <div
        className={styles.stack}
        style={{ "--count": items.length }}
      >
        {items.map((card, i) => {
          const isEven = i % 2 === 0;
          const tint = card.tint || COLORS[i % COLORS.length];

          const innerContent = (
            <>
              <div className={styles.media}>
                <img
                  src={card.img || "/Industry/fashion.webp"} // fallback image
                  alt={card.title}
                  className={styles.img}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.desc}>
                  {card.desc}
                </p>
              </div>
            </>
          );

          const innerStyle = {
            "--tint": tint,
            "--idx": i
          };

          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${styles.card} ${
                isEven ? styles.left : styles.right
              }`}
              style={innerStyle}
            >
              {card.id ? (
                <Link 
                  to={`/industries-we-serve/${card.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.inner} stack-inner`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {innerContent}
                </Link>
              ) : (
                <div 
                  className={`${styles.inner} stack-inner`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {innerContent}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
