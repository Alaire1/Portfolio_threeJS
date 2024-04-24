import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for routing

const Socials = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText }>Social media</h2>
      <div className="mt-20 flex flex-wrap place-content-evenly">
        <Link to="https://github.com/Alaire1" target="_blank" className="btn">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </Link>
        <Link to="https://codepen.io/alaire" target="_blank" className="btn">
          <FontAwesomeIcon icon={faCodepen} className="icon" /> 
        </Link>
        <Link to="https://www.instagram.com/alaire.art/" target="_blank" className="btn">
          <FontAwesomeIcon icon={faInstagram} className="icon" /> 
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(Socials, "socials");
