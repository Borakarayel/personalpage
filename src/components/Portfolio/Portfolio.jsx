import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText"> My Latest Works</span>
            <p className={{ marginTop: "10px" }}>
              Perfect Solutions for Digital Experience
            </p>
          </div>

          <a
            href="https://github.com/Borakarayel"
            target="_blank"
            className="secondaryText"
          >
            Explore More Works
          </a>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          <a
            href="https://github.com/Borakarayel/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./showCase6.png"
              alt="eCommerce"
            />
          </a>
          <a
            href="https://github.com/Borakarayel/Booking-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.6)}
              src="./showCase5.png"
              alt="borabooking"
            />
          </a>
          <a
            href="https://borakarayel.github.io/weather-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.9, 0.6)}
              src="./showCase4.png"
              alt="weather-app"
            />
          </a>
          <a
            href="https://borakarayel.github.io/tictactoe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 1, 0.6)}
              src="./showCase3.png"
              alt="tictactoe"
            />
          </a>
          <a
            href="https://borakarayel.github.io/myLibrary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 1, 0.6)}
              src="./showCase2.png"
              alt="MyLibrary"
            />
          </a>
          <a
            href="https://borakarayel.github.io/Etch-A-Sketch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 1, 0.6)}
              src="./showCase1.png"
              alt="etch-a-sketch"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
