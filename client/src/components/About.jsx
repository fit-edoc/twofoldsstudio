import React from "react";

import { motion } from "motion/react";

const About = () => {
  return (
    <div className="h-[63vh] w-screen bg-[#e4e2cd] flex flex-col  md:flex-row md:h-[50vh] border-b-[1px] border-black">
      <div className="w-screen  h-[50px] flex items-center     px-2 border-r-[0.1px] border-black md:justify-center md:h-[50vh] ">
        {" "}
        <h1 className="who font-head  px-3 md:text-[2vw] flex items-center gap-1">
          <span className="text-[25px] md:text-[3vw] ">WHO</span> are we ?{" "}<img src="/smile.svg" className="h-[40px]" alt="" />
        </h1>
      </div>
      <div className="w-screen h-[50vh] px-4 md:py-7 ">
        
        <motion.h2 className="italic md:px-6" initial={{opacity:0,backdropFilter:"blur(10px)"}}  whileInView={{opacity:1,backdropFilter:"blur(0px)"}} transition={{duration:0.9}} viewport={{once:true}}>
          " More Than a Agency. <br />
          We're Your Creative Partner."
        </motion.h2>
        <motion.p className="py-6 text-start text-[20px] font-logo relative  md:px-5" initial={{y:20,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,ease:"easeIn"}}>
          We drive growth with every scroll. Our digital strategies and social media expertise are designed to attract your ideal customers and convert them into loyal advocates for <span className="bg-black text-white px-1">your brand. </span> <img src="/star.svg" className="ml-5 h-[70px] absolute left-[60%] bottom-[-5%] md:h-[100px] md:bottom-[-27%]" alt="" />
        </motion.p>
       
      </div>
    </div>
  );
};

export default About;
