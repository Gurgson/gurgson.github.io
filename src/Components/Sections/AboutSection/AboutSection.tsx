import { motion } from "framer-motion"
import {  imgAnimation } from "../../../helpers/animation"
import Technology from "./Technology/Technology"
import { Technlogies } from "../../../helpers/returnTechIcon"


const AboutSection = () => {
  
  return (
    <section id="about" className="  min-h-[600px] py-20 overflow-hidden bg-cover bg-center bg-[url('/src/assets/bg-contact.svg')]">
      <div className=" bg-center p-[10vw] sm:relative w-full justify-center items-center flex flex-col  mx-auto max-w-3xl ">
        <svg  className=" w-full h-full bg-center absolute top-0 left-0 stroke-black/35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"  strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.39137 2.46863C7.56432 2.29568 7.6508 2.2092 7.75172 2.14736C7.84119 2.09253 7.93873 2.05213 8.04077 2.02763C8.15586 2 8.27815 2 8.52274 2H15.4773C15.7218 2 15.8441 2 15.9592 2.02763C16.0613 2.05213 16.1588 2.09253 16.2483 2.14736C16.3492 2.2092 16.4357 2.29568 16.6086 2.46863L21.5314 7.39137C21.7043 7.56432 21.7908 7.6508 21.8526 7.75172C21.9075 7.84119 21.9479 7.93873 21.9724 8.04077C22 8.15586 22 8.27815 22 8.52274V15.4773C22 15.7218 22 15.8441 21.9724 15.9592C21.9479 16.0613 21.9075 16.1588 21.8526 16.2483C21.7908 16.3492 21.7043 16.4357 21.5314 16.6086L16.6086 21.5314C16.4357 21.7043 16.3492 21.7908 16.2483 21.8526C16.1588 21.9075 16.0613 21.9479 15.9592 21.9724C15.8441 22 15.7218 22 15.4773 22H8.52274C8.27815 22 8.15586 22 8.04077 21.9724C7.93873 21.9479 7.84119 21.9075 7.75172 21.8526C7.6508 21.7908 7.56432 21.7043 7.39137 21.5314L2.46863 16.6086C2.29568 16.4357 2.2092 16.3492 2.14736 16.2483C2.09253 16.1588 2.05213 16.0613 2.02763 15.9592C2 15.8441 2 15.7218 2 15.4773V8.52274C2 8.27815 2 8.15586 2.02763 8.04077C2.05213 7.93873 2.09253 7.84119 2.14736 7.75172C2.2092 7.6508 2.29568 7.56432 2.46863 7.39137L7.39137 2.46863Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        <figure
        
         className=" max-w-xs shadow-xl  rounded-[25%] border-4 border-primary  shadow-slate-600/50  z-10 overflow-hidden relative ">
        <motion.img

          variants={imgAnimation} 
          initial="initial"
          animate="end"
          transition={
            { 
              duration: 30,
              repeat: Infinity,
              repeatType: "mirror"
            }
          }
        
          className="  bgslate h-[200px] sm:h-[300px]  aspect-square object-cover"
          src="/aboutSection/pfp.jpg" alt="Picture of me" loading="lazy"/>
          <figcaption 
          className=" absolute z-20  w-full bottom-0  text-center text-lg tracking-wider bg-black/70 px-2 py-1"
          >  my <span className=" text-tetriary">tech</span>nologies</figcaption>
        </figure>
        <div className="">
          <Technology name={Technlogies.htm} className=" sm:absolute top-0 left-1/3"  />
          <Technology name={Technlogies.css}  className=" sm:absolute top-0 right-1/3"/> 
          <Technology name={Technlogies.tailwind}  className=" sm:absolute top-1/4 left-[12.5%]"/> 
          <Technology name={Technlogies.sass}  className=" sm:absolute top-1/4 right-[12.5%]"/> 
          <Technology name={Technlogies.js}  hoverTop={true} className=" sm:absolute bottom-1/4 left-[12.5%]"/> 
          <Technology name={Technlogies.ts}  hoverTop={true} className=" sm:absolute bottom-1/4 right-[12.5%]"/> 
          <Technology name={Technlogies.node}  hoverTop={true} className=" sm:absolute bottom-0 left-1/3"/> 
          <Technology name={Technlogies.express}  hoverTop={true} className=" sm:absolute bottom-0 right-1/3"/> 
        </div>
      </div>
      <div  className=" mx-auto max-w-xl text-justify grid  indent-5 gap-5 my-10 relative">
        {/* <Plank rotate="40deg" zindex={5} className=" top-1/3"/>
        <Plank rotate="-7deg" className=" top-1/4 " zindex={5}>Tap me to learn more!</Plank>
        <Plank rotate="-50deg" className="top-1/2" zindex={4}/> */}
        <p className=" text-center indent-0 text-3xl">
        Greetings! I'm Jakub Stapiński
        </p>
        <p>
          I am a dedicated JavaScript developer with a focus on crafting exceptional web experiences. Currently pursuing my engineering degree in Programming Web Applications at the College of Economics and Science in Krakow, I merge a strong academic background with hands-on coding skills. 
        </p>
        <p>
          From designing polished UIs to delving into server-side logic, I find joy in every aspect of web development. Eager to apply my technical expertise to real-world challenges, I stay at the forefront of emerging technologies through a commitment to continuous learning.
        </p>
        <p className=" indent-0 text-center">
        Let's collaborate and build something extraordinary together!
        </p>
        
      </div>
    </section>
  )
}

export default AboutSection