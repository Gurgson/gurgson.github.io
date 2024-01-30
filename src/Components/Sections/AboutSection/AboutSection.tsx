import { motion, useInView } from "framer-motion"
import Highlight from "../../Higlight/Highlight"
import TechnologyPanel from "./TechnologyPanel/TechnologyPanel"
import { fadeFromBottom } from "../../../helpers/animation"
import { useRef } from "react"


const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isDescriptionInView = useInView(ref, {once: true})
  return (
    <section id="about" className="  min-h-[600px] py-20 overflow-hidden bg-cover bg-center bg-[url('/src/assets/bg-contact.svg')]">
        <TechnologyPanel/>
        
       <motion.article
          ref={ref}
        variants={fadeFromBottom} 
         initial="initial"
        
         animate={(isDescriptionInView)?"end":""}
         transition={{staggerChildren: 0.4, duration: 1}}
        className=" mx-auto max-w-xl text-justify grid mt-20  indent-5 gap-5 my-10 relative px-8 sm:px-0">
  
          <motion.p variants={fadeFromBottom}  className=" text-center indent-0 text-3xl">
          <Highlight>Greetings!</Highlight> I'm Jakub Stapiński
          </motion.p>
          <motion.p variants={fadeFromBottom} >
            I am a dedicated <Highlight>JavaScript developer </Highlight> with a focus on crafting exceptional web experiences. Currently pursuing my <Highlight>engineering</Highlight> degree in Programming Web Applications at the <Highlight>College</Highlight> of Economics and Science in Krakow, I merge a strong academic background with hands-on coding skills. 
          </motion.p>
          <hr  className=" w-3/5 mx-auto "/>
          <motion.p variants={fadeFromBottom} >
            From designing <Highlight>polished</Highlight> UIs to delving into server-side logic, I find joy in every aspect of web development. <Highlight>Eager</Highlight> to apply my technical expertise to real-world challenges, I stay at the forefront of emerging technologies through a <Highlight>commitment</Highlight> to continuous learning.
          </motion.p>
          <hr  className=" w-3/5 mx-auto "/>
          <motion.p variants={fadeFromBottom}  className=" indent-0 text-center">
          Let's collaborate and <Highlight>build</Highlight> something extraordinary <Highlight>together</Highlight>!
          </motion.p>
        
      </motion.article>
    </section>
  )
}

export default AboutSection