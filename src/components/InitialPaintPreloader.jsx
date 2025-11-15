"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * Injects a pre-hydration overlay ASAP (beforeInteractive),
 * then removes it on first client effect (after React is ready).
 */
export default function InitialPaintPreloader() {
  useEffect(() => {
    const el = document.getElementById("finsol-instant-preloader");
    if (el) el.remove();
  }, []);

  return (
    <Script id="finsol-preloader" strategy="beforeInteractive">
      {`
        (function() {
          var s = document.createElement('style');
          s.textContent =
            '#finsol-instant-preloader{position:fixed;inset:0;display:grid;place-items:center;z-index:999998;background:linear-gradient(135deg,#f7faff 0%,#eef3ff 50%,#f7faff 100%)}' +
            '@keyframes finsolSpin{to{transform:rotate(360deg)}}' +
            '#finsol-instant-preloader .dot{width:56px;height:56px;border-radius:50%;border:6px solid rgba(0,0,0,0.08);border-top-color:rgba(0,0,0,0.35);animation:finsolSpin .8s linear infinite;}';
          document.head.appendChild(s);
          var d = document.createElement('div');
          d.id = 'finsol-instant-preloader';
          var c = document.createElement('div');
          c.className = 'dot';
          d.appendChild(c);
          document.body.appendChild(d);
        })();
      `}
    </Script>
  );
}
