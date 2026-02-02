/* eslint-disable no-unused-vars */
import { Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function OurAlumni() {
  return (
    <>
      <Container className="flex flex-col justify-around items-center">
        <motion.div
          initial={{ opacity: 0, y:20 }}
          animate={{ opacity: 1, y:0 }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: 'easeInOut',//[0, 0.71, 0.2, 1.01]
          }}
        >
          <Typography variant="h2" sx={{ marginTop: "1rem" }}>
            The Hall of <span className="text-cyan-400">Heritage</span>
          </Typography>
          <Typography variant="h6" className="text-gray-500">
            Meet the honorable alumnis of our society
          </Typography>
        </motion.div>
      </Container>
    </>
  );
}
