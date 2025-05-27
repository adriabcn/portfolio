import { useEffect, useRef } from "react";


export const RevealOnScroll = ({ children }) => {

  const ref = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      ref.current?.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal"> {children} </div>
  );
}