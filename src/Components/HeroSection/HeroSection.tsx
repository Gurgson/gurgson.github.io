import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react"

const HeroSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
    })
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const bg2Y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  return (
    <section 
        ref={sectionRef}
        className={` relative min-h-screen bg-[url('./assets/bg-min.png')] bg-cover bg-no-repeat overflow-hidden`}
        >
        <motion.div 
          className="text-center grid gap-8 font-bold top-[20%] relative z-20 "
          style={
            {
              y: textY
            }
          }
          >
            <h1 className=" text-7xl  ">Jakub Stapiński</h1>
            <h2 className="text-3xl  uppercase  ">javascript developer</h2>
        </motion.div>
        <motion.div
          className="bg-[url('./assets/bg1-min.png')] absolute inset-0 z-10 bg-bottom bg-cover"
          style={
            {
              y: bgY
            }
          }
        />
        <motion.div
          className="bg-[url('./assets/bg2-min.png')] absolute inset-0  bg-top bg-cover "
          style={
            {
              y: bg2Y
            }
          }
        />
    </section>
  )
}

export default HeroSection