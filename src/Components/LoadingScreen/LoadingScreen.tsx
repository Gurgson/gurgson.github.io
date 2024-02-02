import { useContext } from "react"
import { LoadingScreenContext } from "../../context/LoadingScreenContext"
import { Variants, motion } from "framer-motion";
const loaderAnimation =(pos: number) : Variants=>{
  return {
    "initial": {
      // opacity: 1,
      translateX: 0
    },
    "end": {
      translateX: `-100%`,
      // opacity: 0,
      transition: {
        duration: 0.4,
      }
    }
  }
}

const LoadingScreen = () => {
  const loading = useContext(LoadingScreenContext); 
  return (
    <motion.div
      initial="initial"
      animate={loading?.isLoading?"initial":"end"}
      transition={{staggerChildren: 0.2}}
      className={`origin-top gap-8 ease-out fixed z-[60]  transition-all w-full h-full`}>
      <motion.span variants={loaderAnimation(1)} className=" w-full h-1/5 block bg-gradient-to-b from-slate-950 to-slate-900 z-[64]"></motion.span>
      <motion.span variants={loaderAnimation(2)} className=" w-full h-1/5 block bg-gradient-to-b from-slate-900 to-slate-800 z-[63]"></motion.span>
      <motion.span variants={loaderAnimation(3)} className=" w-full h-1/5 block bg-gradient-to-b bg-slate-800 z-[62]"><img src="/Devicon.svg" className={` w-32 aspect-square animate-pulse mx-auto`}/> </motion.span>
      <motion.span variants={loaderAnimation(4)} className=" w-full h-1/5 block bg-gradient-to-b from-slate-800 to-slate-700 z-[61]"></motion.span>
      <motion.span variants={loaderAnimation(5)} className=" w-full h-1/5 block bg-gradient-to-b from-slate-700 to-slate-600 z-[60]"></motion.span>
    </motion.div>
  )
}

export default LoadingScreen