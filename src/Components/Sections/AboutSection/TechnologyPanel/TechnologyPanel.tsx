import { motion } from "framer-motion"
import { imgAnimation } from "../../../../helpers/animation"
import Technology, { TTechnology } from "../Technology/Technology"
import { Technlogies } from "../../../../helpers/returnTechIcon"
import { useState } from "react"
import AnimatedText from "../../../AnimatedText/AnimatedText"
import Highlight from "../../../Higlight/Highlight"

const techList : TTechnology[]= [
    {
        name: Technlogies.htm,
        position: {
            x: 2,
            y: 1,
        }
    },
    {
        name: Technlogies.css,
        position: {
            x: 3,
            y: 1,
        }
    },
    {
        name: Technlogies.tailwind,
        position: {
            x: 3,
            y: 2,
        }
    },
    {
        name: Technlogies.sass,
        position: {
            x: 5,
            y: 1,
        }
    },
    {
        name: Technlogies.js,
        position: {
            x: 1,
            y: 2,
        }
    },
    {
        name: Technlogies.react,
        position: {
            x: 4,
            y: 2,
            big: true
        }
    },
    {
        name: Technlogies.ts,
        position: {
            x: 3,
            y: 4,
        }
    },
    {
        name: Technlogies.node,
        position: {
            x: 1,
            y: 3,
            big: true
        }
    },
    {
        name: Technlogies.express,
        position: {
            x: 5,
            y: 4,
        }
    },
   
]


const TechnologyPanel = () => {
   const [selectedTech, setTech] = useState<Technlogies>(Technlogies.htm); 
  return (
    <article className="flex justify-center flex-col-reverse sc850:flex-row items-center gap-4">
        <figure
         className="border-[30%_70%_70%_30%_/_30%_30%_70%_70%]  overflow-hidden p-4 flex flex-col-reverse  sc850:flex-col  h-full">
            <a href="https://github.com/gurgson" target="_blank">
                <motion.img
                    
                    variants={imgAnimation} 
                    initial="initial"
                    animate="end"
                    transition={
                
                        { 
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "mirror"
                        }
                    }
                    whileHover={{
                        scale: 1.05,
                        transition:{
                            duration: 0.5
                        }
                    }}
                    
                    className=" h-full max-h-[300px] aspect-square object-cover  relative border-8  border-slate-900/80 rounded-[50%]  "
                    src="/aboutSection/pfp.jpg" alt="Picture of me" loading="lazy"/>
            </a>
            <figcaption className=" font-bold text-2xl text-center w-[55%] flex justify-between mx-auto">
                <Highlight>&#123;</Highlight>
                <AnimatedText delayMultiplier={0.5}>{selectedTech}</AnimatedText>
                <Highlight>&#125;&#59;</Highlight>
            </figcaption>
        </figure>
        <div className=" grid grid-cols-[repeat(5,55px)]  bg-[url('/decorations/monitor.svg')] bg-contain bg-center bg-no-repeat sm:grid-cols-[repeat(5,90px)] sm:grid-rows-[repeat(5,90px) ">
            {
                techList.map((item, index)=>{
                    console.log(item)
                    return <Technology isActive={(item.name === selectedTech)} data={item} key={`Tech-icon-${index}`} handleHover={()=>{setTech(item.name)}}/>
                })
            }


        </div>
      </article>
  )
}

export default TechnologyPanel