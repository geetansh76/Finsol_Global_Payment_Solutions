"use client";

import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Preloader from "./Preloader";

// 1) outer wrapper: does NOT use any Next hooks
export default function RouteChangeLoader(props) {
  return (
    <Suspense fallback={null}>
      <RouteChangeLoaderInner {...props} />
    </Suspense>
  );
}

// 2) inner component: the one that actually uses useSearchParams
function RouteChangeLoaderInner({
  minDuration = 500,
  showOnFirstLoad = true,
}) {
  const pathname = usePathname();
  const search = useSearchParams();

  const [visible, setVisible] = useState(showOnFirstLoad);
  const firstClientRender = useRef(true);
  const startAtRef = useRef(0);
  const hideTimerRef = useRef(null);

  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const show = () => {
    if (visible) return;
    clearHideTimer();
    startAtRef.current = performance.now();
    setVisible(true);
  };

  const hide = () => {
    const elapsed = performance.now() - startAtRef.current;
    const remaining = Math.max(0, minDuration - elapsed);
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      hideTimerRef.current = null;
    }, remaining);
  };

  // cleanup on unmount
  useEffect(() => () => clearHideTimer(), []);

  // initial mount
  useLayoutEffect(() => {
    if (firstClientRender.current) {
      firstClientRender.current = false;

      if (showOnFirstLoad) {
        startAtRef.current = performance.now();
        hide();
      } else {
        setVisible(false);
      }

      const onPageShow = (e) => {
        if (e.persisted) {
          clearHideTimer();
          setVisible(false);
        }
      };
      window.addEventListener("pageshow", onPageShow);
      return () => window.removeEventListener("pageshow", onPageShow);
    }
  }, [showOnFirstLoad]);

  // before unload
  useEffect(() => {
    const onBeforeUnload = () => {
      startAtRef.current = performance.now();
      setVisible(true);
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  // react to route / search changes
  useLayoutEffect(() => {
    if (firstClientRender.current) return;

    show();
    Promise.resolve().then(hide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search?.toString()]);

  return visible ? <Preloader /> : null;
}
