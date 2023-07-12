import React from 'react'
import css from './Footer.module.scss'
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView= "show"
    viewport={{ once: false, amount: 0.25 }}

    className={`paddings ${css.wrapper}`}>


<motion.div
variants={footerVariants}

className={`innerWidth yPaddings flexCenter ${css.container}`}>
   <div className={css.left}>
<span className="primaryText">
    Let's make something<br/> amazing together! <br/>
</span>

<span className="primaryText">
    <a href="mailto: m.bora.karayel@gmail.com">
    Say Hi!
        </a> to me...
</span>
   </div>
   <div className={css.right}>
    <div className={css.info}>
        <span className="secondaryText">Information</span>
        <p>Uskudar, Istanbul, Turkey</p>
    </div>
    <div className={css.menu}>
    <li>Services</li>
    <li>Experiences</li>
    <li>Portfolio</li>
    <li>Testimonials</li>
    </div>
   </div>
    </motion.div>
    </motion.section>
    )
}

export default Footer