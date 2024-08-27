import React from "react";
import { PROFILE } from "../constants";
import profilepic from "../assets/profilepic.webp";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div
      className="min-h-screen flex items-end relative justify-center"
      id="Hero"
    >
      <motion.img
        src={profilepic}
        alt={PROFILE.name}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="z-20  mx-4 max-w-3xl pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
          {PROFILE.name}
        </h2>
        <p className="pt-2 font-semibold">{PROFILE.info}</p>
      </motion.div>
    </div>
  );
}

export default HeroSection;
