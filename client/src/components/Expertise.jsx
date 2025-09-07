import React, { useState } from 'react'


import {motion}  from 'motion/react'
const Expertise = () => {



const [ishovered ,setIshovered] = useState(false)

const data = [
  {
    id: 1,
    title: "Branding That Speaks",
    description: "We craft bold brand identities that make people stop scrolling and start remembering.",
    img: "https://i.pinimg.com/736x/bf/ee/eb/bfeeebff6661bc777d703d12f9fa2ac2.jpg",      // Image 1
    hoverimg: "https://i.pinimg.com/736x/fa/c8/07/fac807b9811734d903ec037a7732fc05.jpg"    // complementary hero visuals
  },
  {
    id: 2,
    title: "Styling With Purpose",
    description: "Aesthetic visuals curated to match your vibe and connect with your audience.",
    img: "https://i.pinimg.com/1200x/63/eb/50/63eb500b9af02c1c77dc8667839c747e.jpg",       // dark overlay style but abstract
    hoverimg: "https://i.pinimg.com/736x/dd/96/1d/dd961d062301484f16517f71fb386654.jpg"  // image 6 style abstract
  },
  {
    id: 3,
    title: "Production That Pops",
    description: "From reels to full-scale campaigns, our production is engineered to trend authentically.",
    img: "https://i.pinimg.com/736x/2c/d1/d0/2cd1d05f3286f55fd0c839697f44a6dc.jpg",            // Image 3—hero images board, mockups
    hoverimg: "https://i.pinimg.com/1200x/d4/d2/02/d4d202fee09bcb7dd6de69225eb2f67b.jpg"         // Hover can remain same or find another—Pinterest reuse
  },
  {
    id: 4,
    title: "Socials That Stick",
    description: "Content built for Instagram, TikTok, and beyond—platform-native and engagement-driven.",
    img: "https://i.pinimg.com/736x/ad/f2/87/adf287a2c2adb4b04e836c4d6c8136fb.jpg",         // reusing hero style for visual consistency
    hoverimg: "https://i.pinimg.com/originals/3e/bc/ad/3ebcadabc2571e36a59678d4a71fd4ba.gif"
  },
  {
    id: 5,
    title: "Content That Converts",
    description: "Captions, carousels, and campaigns crafted to inspire action, not just likes.",
    img: "https://i.pinimg.com/1200x/c2/fe/e5/c2fee5d6a55886a04b91066e62ed1690.jpg",       // modern dashboard vibe
    hoverimg: "https://i.pinimg.com/736x/bf/80/e9/bf80e9c44ef319ad5f61201dac579904.jpg"
  },
  {
    id: 6,
    title: "Websites That Flow",
    description: "Sleek, responsive, conversion-friendly websites that extend your social presence.",
    img: "https://i.pinimg.com/736x/2b/d1/f4/2bd1f4cfc69c7cbdd7e438409eb97a8c.jpg",
    hoverimg: "https://i.pinimg.com/736x/7d/77/1c/7d771cf024706600a09b8d3ff30073f0.jpg"
  },
  {
    id: 7,
    title: "Performance That Matters",
    description: "We track, test, and optimize everything to deliver measurable growth.",
    img: "https://i.pinimg.com/1200x/b3/63/ba/b363bae2cf6ba31d6960d55308110520.jpg", // Image 3 dark analytics
    hoverimg: "https://i.pinimg.com/736x/48/9d/d6/489dd666c410c931818f1d1a94ce6c76.jpg"      // image 4 neon/dark dashboard
  }
];


  return (
    <div className='min-h-screen w-screen bg-[#e4e2cd]'>

        <div className='h-[60px] w-screen'> <h1 className='text-center text-[15px] font-logo py-3 capitalize'>Our exptertise</h1></div>

        <div className='min-h-screen w-screen flex flex-col justify-center  gap-4 '>
            {data.map((item,idx)=>(
                <div className='min-h-[70vh] w-screen  py-2'>
<motion.div
  className="h-[250px]  w-[80%] mx-auto rounded-lg  overflow-hidden relative md:h-[70vh] md:w-[40%]"
  onMouseEnter={() => setIshovered(item.id)}
  onMouseLeave={() => setIshovered(null)}
  initial={{y:40}}
  whileInView={{y:[70,0]}}
  viewport={{once:true}}
  
>
  <motion.img
    src={item.img}
    alt=""
    className="absolute h-full w-full object-cover object-center"
    animate={{ opacity: ishovered === item.id ? 0 : 1 }}
    whileHover={{scale:1.2}}
    transition={{ duration: 0.5 }}
  />
  <motion.img
    src={item.hoverimg}
    alt=""
    className="absolute h-full w-full object-cover object-center"
    animate={{ opacity: ishovered === item.id ? 1 : 0 }}
    whileHover={{scale:1.2}}
    transition={{ duration: 0.5 }}
  />
</motion.div>

                    <div className='min-h-[100px]  w-[80%] mx-auto px-1 py-1 flex flex-col md:text-center md:w-[45%]'> <h1 className='text-[25px] font-nav'>{item.title}</h1> 
                    <p  className='font-thin  rounded-lg '>{item.description}</p></div>
                </div>
            ))}

            
        </div>
      
    </div>
  )
}

export default Expertise
