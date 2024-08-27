import React from "react";
import { CERTIFICATES } from "../constants/index.jsx";
import { motion } from "framer-motion";

const constantVariable = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Certificate() {
  return (
    <div id="certificates">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>
      <div className="mx-auto flex items-center justify-center py-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={constantVariable}
          className="w-full p-2 sm:w-1/2 shadow-xl"
        >
          <motion.img
            src={CERTIFICATES.image}
            alt={CERTIFICATES.title}
            variants={itemVariants}
            className="rounded-md"
          />
          <h2 className="text-center">{CERTIFICATES.title}</h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Certificate;
