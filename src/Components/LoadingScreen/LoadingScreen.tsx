import { useContext } from "react"
import { LoadingScreenContext } from "../../context/LoadingScreenContext"
import { Variants, motion } from "framer-motion";
const loaderAnimation : Variants={
   
    "initial": {
      scale: 1,
      translateX: 0
    },
    "end": {
      translateX: `-100%`,
      scale: 0.75,
      transition: {
        duration: 0.5,
      }
    }
  
}
const LoadingScreen = () => {
  const loading = useContext(LoadingScreenContext); 
  return (
    <motion.div
      initial="initial"
      animate={loading?.isLoading?"initial":"end"}
      transition={{staggerChildren: 0.1}}
      className={`origin-top gap-8 ease-out fixed z-[60]  transition-all w-full h-full`}>
      <motion.span variants={loaderAnimation} className=" w-full h-1/5 block bg-gradient-to-b from-slate-900 to-slate-800 z-[64]"></motion.span>
      <motion.span variants={loaderAnimation} className=" w-full h-1/5 block bg-gradient-to-b bg-slate-800 z-[63]"></motion.span>
      <motion.span variants={loaderAnimation} className=" w-full h-1/5 block bg-gradient-to-b bg-slate-800 z-[62]">
        <img src="/Devicon.svg" className={` w-32 aspect-square animate-pulse mx-auto`}/> 
      </motion.span>
      <motion.span variants={loaderAnimation} className=" w-full h-1/5 flex justify-center items-center gap-2 bg-gradient-to-b bg-slate-800  z-[61]">

        {
        Array(5).fill(null).map((_,index)=>
          <motion.span 
          className={`w-7 h-7 ${!loading?.isLoading && " opacity-0" } duration-300 transition-all bg-orange-500/85 rounded-[50%]`}
          animate={{
            translateX: "-37.5%",
            scale: 0,
            transition: {
              repeat: Infinity,
              duration: 1,
              delay: index/1.5
            }
            
          }}
          key={index}>
          </motion.span>)
        }

      </motion.span>
      <motion.span variants={loaderAnimation} className=" w-full h-1/5 block bg-gradient-to-b from-slate-800 to-slate-700 z-[60]"></motion.span>
    </motion.div>
  )
}

export default LoadingScreen