import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Bora</div>
        <ul
          ref={menuRef}
          className={`flexCenter ${css.menu}`}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#work">Experiences</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* this section is hidden */}
          {/* <li>
            <a href="#people">Testimonials</a>
          </li> */}
          <li>
            <a href="#footer">INFO</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+49 177 156 05 77</p>
            <BiPhoneCall size={30} />
          </li>
        </ul>
        {/*for sm and md screens only*/}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight className={css.menuIcon} />
        </div>
      </div>
    </motion.div>
  );
};
export default Header;
