/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Typography } from "@mui/material";

const SpotlightCard = ({ src, alt }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative flex justify-center items-center overflow-hidden rounded-2xl bg-slate-900 border border-slate-800"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl"
      />
    </div>
  );
};

export default function BranchesIntro({imgSrc,imgAlt,smallTitle,title1,title2,desc,isRev=false}) {
    const style = !isRev ? "md:flex-row" : "md:flex-row-reverse";
  return (
    <>
      <section className={`flex flex-col ${style} gap-12 items-center`}>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SpotlightCard src={imgSrc} alt={imgAlt} />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            className="text-cyan-400 tracking-widest font-bold"
          >
            {smallTitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, mt: 1 }}>
            {title1}<span className="text-cyan-400">{title2}</span>
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-400 text-lg leading-relaxed"
          >
            {desc}
          </Typography>
        </motion.div>
      </section>
    </>
  );
}
