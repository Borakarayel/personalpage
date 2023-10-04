import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="footer"></a>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something
            <br /> amazing together! <br />
          </span>

          <span className="primaryText">
            <a href="mailto: m.bora.karayel@gmail.com">Say Hi!</a> to me...
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Nürnberg, Germany</p>
            <p>+49 177 156 05 77</p>
          </div>
          <div className={css.menu}>
            <li>
              {" "}
              <a href="#experties">Services</a>
            </li>
            <li>
              <a href="#work">Experiences</a>
            </li>
            <li>
              {" "}
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#footer">Info</a>
            </li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
