import {  Variants, motion } from 'framer-motion'
import  { FC } from 'react'

interface IProps {
    children: string,
    classname?: string,
    delayMultiplier?: number,
    stopAnimation?: boolean,
    delayAnimation? : number
}  
const defaultAnimations : Variants = {
    hidden: {
        opacity: 0,
        y: "2rem",
        rotateZ: "90deg",




    },
    visible: {
        opacity:1,
        rotateZ: 0,
        y: 0
       
    }
}
const AnimatedText : FC<IProps>= ({children, classname, delayMultiplier, stopAnimation, delayAnimation}) => {

    return (
    <motion.span 
        key={children}
        className={classname}
        transition={{ delayChildren: delayAnimation || 0, staggerChildren: 0.2 * (delayMultiplier || 1), type: "spring"}}
        initial="hidden"
        animate={(stopAnimation)?"":"visible"}
        >
        {
            
            children.split(" ").map((word,wind)=><span className=' inline-block' key={`word-${wind}`}>
                {
                    word.split("").map((char, cinx)=>
                    <motion.span className=' inline-block' variants={defaultAnimations} key={`word-${cinx}`}>
                        {char}
                    </motion.span>)
                }
                <span className=' inline-block'>&nbsp;</span>
            </span>)
        }
    </motion.span>
  )
}

export default AnimatedText