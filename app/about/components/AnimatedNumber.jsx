"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);
  useEffect(
    () => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    },
    springValue,
    value
  );
  return <span ref={ref}></span>;
};

export default AnimatedNumber;
