import { motion } from 'motion/react'
import React from 'react'


const Hero = () => {
  return (
    <div className='h-[100vh] w-screen bg-[#e4e2cd] relative'>
        <div className='h-[50vh]  w-screen flex  flex-col items-center justify-center'>
<motion.h1 className="text-[25px] font-logo text-center text-[#433119]  md:text-[3.5vw] md:w-[50vw] backdrop-blur-sm" initial={{backdropFilter:"blur(50px)",opacity:0}} animate={{backdropFilter:"blur(0px)",opacity:1}} transition={{duration:3}} >
  Your Social Growth Story Starts in{" "}
  <span className="relative inline-block px-2">
    {/* Text stays above */}
    <span className="relative z-20  text-white"  style={{ textShadow: "5px 5px 6px rgba(0,0,0,0.4)" }}>TwoFolds Studio</span>

    {/* Scribble behind */}
    <span className="absolute inset-0 flex items-center justify-center z-10">
      <motion.img
        src="/srib.svg"
        alt="scribble highlight"
        className="w-full h-full object-contain"
     initial={{ clipPath: "inset(0% 100% 0% 0%)" }}  // collapsed (hidden in center)
         animate={{ clipPath: "inset(0% 0% 0% 0%)" }}    // fully expanded
        
         transition={{duration:5}} />
    </span>
  </span>
</motion.h1>       
        </div>
        <motion.div className='h-[50vh] w-[90%]  absolute top-[65%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg md:h-[60vh] md:w-[50%]'  initial={{ clipPath: "inset(100% 100% 100% 100%)" }}  // collapsed (hidden in center)
         animate={{ clipPath: "inset(0% 0% 0% 0%)" }} transition={{duration:0.9}} >
          <img src="/banner.jpg" className='h-full w-full object-cover object-center rounded-lg' alt="" />
        </motion.div>
       

      <div className='w-[90%] h-[0.1px] left-[5%] bg-black absolute bottom-0'></div>
    </div>
  )
}

export default Hero
