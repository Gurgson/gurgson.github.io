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
        transition={{ delay: delayAnimation || 0, staggerChildren: 0.2 * (delayMultiplier || 1), type: "spring"}}
        initial="hidden"
        animate={(stopAnimation)?"":"visible"}
        >
        {
            children.split("").map((char, index)=><motion.span 
                key={`letter-${index}`}
                variants={defaultAnimations}
                viewport={{once:true}}
                className='inline-block'>
                    {char}
                </motion.span>)
        }
    </motion.span>
  )
}

export default AnimatedText