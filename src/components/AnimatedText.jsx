import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      types: 'chars',
    });

    gsap.from(split.chars, {
      y: () => gsap.utils.random(-150, 150),
      x: () => gsap.utils.random(-300, 300),
      opacity: 0,
      duration: 1,
      delay: 3.2,
      stagger: 0.02,
      ease: 'power3.out',
    });

    return () => split.revert();
  }, []);

  return (
    <p
      ref={textRef}
      className="text-black dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto text-center"
    >
      Welcome to my Portfolio!
    </p>
  );
};