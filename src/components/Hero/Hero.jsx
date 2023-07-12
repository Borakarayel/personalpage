import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";


const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView= "show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>
        {/* upper elements */}
        <div className={css.upperElements}>
          <motion.span 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="primaryText">
            Hey There, <br /> I'm Bora.
          </motion.span>

          <motion.span
          variants={fadeIn("left", "tween", 0.2, 1)} 
          
          className="secondaryText">
            I design simple and effective things,
            <br /> And I love what I do.
          </motion.span>
        </div>
        {/* Person Image */}
        <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)} 
        className={css.person}>
          <motion.img
          variants={slideIn("up", "tween", 0.5, 1.3)} 
          src="./person.png" alt="" />
        </motion.div>
        {/* email adress */}
        <a href="mailto: m.bora.karayel@gmail.com" className={css.email}>
          m.bora.karayel@gmail.com
        </a>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)} 
            className="primaryText">14</motion.div>
            <motion.div 
            variants={fadeIn("left", "tween", 0.3, 1)} className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </motion.div>
          </div>
          <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}  
          className={css.certificate}>
            <img src="../certificate.png" alt="" />
            <span>Certified</span> <br />
            <span>Web Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
