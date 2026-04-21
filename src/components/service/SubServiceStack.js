"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SubServiceStack({ items, palette, serviceId }) {
  const [hovered, setHovered] = useState(-1);

  // // sync hash when hovering
  useEffect(() => {
    if (hovered < 0 || !items[hovered]) return;
    // const id = items[hovered].id;
    //     history.replaceState(null, "", `#${id}`);
  }, [hovered, items]);

  return (
    <div className="ss-stack" role="list">
      {items.map((it, i) => {
        const isOpen = i === hovered;
        const col = palette[i % palette.length];
        return (
          <section
            key={it.id}
            className={`ss-item ${isOpen ? "open" : ""}`}
            style={{ "--bg": col.bg, "--edge": col.edge }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
            <div className="ss-head">
              <h1 className="ss-title">{it.title}</h1>
              <h6>
                <Link
                  to={`/services/${serviceId}/${it.id}`}
                  className="svc-card-link"
                >
                  View More
                </Link>
              </h6>
            </div>

            <div id={`panel-${it.id}`} role="tabpanel" className="ss-body">
              <div className="ss-body-inner">
                <div className="ss-copy">
                  {it.points?.length ? (
                    <ul className="ss-list">
                      {it.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  ) : null}
                  {it.desc ? <p className="ss-desc">{it.desc}</p> : null}

                  <div className="ss-descmore">
                    <p>
                      We deliver best problem solving solution for our client
                      and provide finest finishing product in present and
                      upcoming future. We deliver best problem solving solution
                      for our client and provide finest finishing product in
                      present and upcoming future.
                    </p>
                  </div>
                </div>

                <div className="ss-art">
                  {it.image ? <img src={it.image} alt={it.title} /> : null}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
