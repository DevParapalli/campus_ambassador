import React from "react";
import { motion } from "framer-motion"
import { pageAnimation, titleAnim, slider, sliderContainer } from "../logic/animations"
import styled from 'styled-components';
function Home({ close, setClose }) {

    return (
        <motion.section className="app-section" variants={pageAnimation} initial="hidden" animate="show">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <motion.div variants={titleAnim} initial="hidden" animate="show" className="app-navbar">
                <i onClick={() => { setClose(!close) }} className='bx bx-menu'></i>
                <span className="text">Campus Ambassador Program</span>
            </motion.div>
        </motion.section>
    )
}

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 60px;
  width: 150vw;
  height: 150vh;
  background: #fffebf;
  z-index: 50;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Home;