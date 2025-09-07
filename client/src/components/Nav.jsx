import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

const Nav = () => {
  const [isopen, setIsopen] = useState(false);


  const navitems = [

    {name:"works",href:""},
     {name:"about",href:"#about"},
      {name:"expertise",href:""},
      {name:"contact",href:""},
  ]
  const containerVariants = {
  hidden: { 
    clipPath: "inset(50% 0% 50% 0%)",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  },
  visible: { 
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const navItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5 // Additional delay for the button
    }
  }
};

  return (
    <>
      {/* ✅ Fixed header, always on top */}
      <motion.header
        className=" w-screen  fixed top-0 left-0 z-[1000] flex bg-transparent"
        initial={{ backdropFilter: "blur(40px)", height: "0px" }}
        animate={{ backdropFilter: "blur(0px)", height: "90px" }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          bounce: 1,
        }}
      >
        {/* Logo */}
        <div className="h-full w-[30%] flex justify-center items-center font-logo gap-1 ml-5">
          <h1 className="text-nowrap">
            <span className="text-[30px]">TWO</span>
          </h1>
          <span className="leading-3 md:w-[20px]">FOLDS STUDIO</span>
        </div>

        {/* Desktop nav */}
        <div className="h-full w-[40%] hidden md:flex justify-center items-center gap-5 font-nav capitalize">
          {navitems.map(item=>(
            <a href={item.href} className="group">{item.name} <motion.div className=" border-[#433119] transition-all duration-75 ease-linear group-hover:border-2 "></motion.div></a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="h-full w-[70%] md:w-[30%] flex justify-end items-center md:justify-center px-2">
          <button className="group px-2 py-2 hidden md:block rounded-full  relative border-[2px] border-black text-[11px] overflow-hidden">
            BOOK A CALL <div className="absolute  h-[0px] opacity-0  top-0 left-0 inset-0  bg-[#433119] text-white  flex items-center justify-center text-[11px]  group-hover:opacity-100 group-hover:h-full"> BOOK A CALL</div>
          </button>

          {/* Mobile toggle button */}
          <motion.div
            className="block md:hidden text-[30px] cursor-pointer z-[1100] relative"
            onClick={() => setIsopen(!isopen)}
            initial={false}
            animate={{ rotate: isopen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {isopen ? <IoMdClose /> : <TbMenu />}
          </motion.div>
        </div>
      </motion.header>

      {/* ✅ Mobile menu overlay (always top) */}
<AnimatePresence>
  {isopen && (
    <motion.div
      className="fixed top-0 left-0 w-screen h-[90vh] mt-[90px] z-[9999] bg-black flex flex-col items-start px-4 pt-[120px] gap-[30px] text-white text-[40px] font-logo"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.ul 
        className="flex flex-col gap-[30px] underline"
        variants={containerVariants}
      >
        {navitems.map((item, index) => (
          <motion.li key={item.id || index} variants={navItemVariants}>
            <a href={item.url}>{item.name}</a>
          </motion.li>
        ))}
      </motion.ul>
      
      <motion.button 
        className="mt-6 px-4 py-2 rounded-full bg-[#e4e2cd] text-black text-sm"
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        BOOK A CALL
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default Nav;
