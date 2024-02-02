import { useScroll, useTransform, motion, Variants } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react"
import AnimatedText from "../../AnimatedText/AnimatedText";
import ShootingStar from "./ShootingStar";
import { LoadingScreenContext } from "../../../context/LoadingScreenContext";

const animationSlideIn : Variants = {
  initial: {
    y: "20%"
  },
  end: {
    y: 0
  }
}

const HeroSection = () => {
  //loading screen func  
  const loadingContext = useContext(LoadingScreenContext);
  const [img1Loading, setImg1Loading] = useState<boolean>(false);
  const [img2Loading, setImg2Loading] = useState<boolean>(false);
  useEffect(()=>{
    (img1Loading && img2Loading) && loadingContext?.setLoading(false)
  },[loadingContext, img1Loading, img2Loading])
  //paralax func
    const [paralaxStop, setParalaxStop] = useState<boolean>(false)
    const sectionRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
    });
    
    useEffect(() => {
      const timeout = setTimeout(() => {
        setParalaxStop(true);
      }, 2000);
      return () => clearTimeout(timeout);
    },[]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const bg2Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [1, 0], ["30%", "100%"]);
    const ls = useTransform(scrollYProgress, [1, 0], ["1rem", "0.1rem"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    
  return (
    <section 
        ref={sectionRef}
        
        className={`  relative min-h-screen bg-[url('/bgs/hero-bg-main.jpg')] bg-cover bg-no-repeat overflow-hidden`}
        >
          <ShootingStar left="80%" delay={2} repeatDelay={2}/>
          <ShootingStar left="30%" delay={3} repeatDelay={2.5}/>
          <ShootingStar left="50%" delay={1} repeatDelay={1.5}/>
          <ShootingStar left="110%" delay={1.5} repeatDelay={2.2}/>
        <motion.div 
          className="text-center grid gap-8 font-bold top-[20%] relative z-20 "
          style={
            {
              y: (paralaxStop)?textY: "",
              opacity,
              letterSpacing: ls
            }
          }
          
          >
            <p className="md:text-8xl  text-6xl z-10  [text-shadow:_-6px_-6px_#3a518bc7] ">
              <AnimatedText>Jakub</AnimatedText>
              <br />
              <AnimatedText>Stapiński</AnimatedText>
            </p>
            <motion.h2 className="text-3xl -tracking-wider  uppercase  ">javascript developer</motion.h2>
        </motion.div>
        <motion.img
          src="/bgs/hero-bg-bottom.png"
          alt="bckgroun-1"
          onLoad={()=>{ setImg1Loading(true)}}
          variants={animationSlideIn}
          initial="initial"
          animate="end"
          transition={{
            duration: 0.6,
          }}
          className="absolute bottom-0 z-20 bg-bottom bg-cover"
          style={
            {
               y: (paralaxStop)?bgY: ""
            }
          }
        />
        <motion.img
          onLoad={()=>{ setImg2Loading(true)}}
          src="/bgs/hero-bg-mid.png"
          alt="bckgroun-2"
          variants={animationSlideIn}
          initial="initial"
          animate="end"
          transition={{
            duration: 2,
            type:  "spring",
            delay: 0.3
          }}
          className="absolute bottom-5  bg-top bg-cover   "
          style={
            {
              y: (paralaxStop)?bg2Y: ""
            }
          }
        />
    </section>
  )
}

export default HeroSection