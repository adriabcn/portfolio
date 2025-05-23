import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const FlippingI = () => {
  const iRef = useRef(null);

  useEffect(() => {
    gsap.set(iRef.current, {
      transformPerspective: 800,
      transformStyle: "preserve-3d",
    });

    gsap.to(iRef.current, {
      rotationX: 360,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      repeatDelay: 1,
    });
  }, []);

  return (
    <span
      ref={iRef}
      style={{
        display: "inline-block",
        transformOrigin: "center center",
        perspective: "800px",
      }}
    >
      i
    </span>
  );
};