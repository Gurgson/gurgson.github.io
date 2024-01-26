import {  Variants, motion } from 'framer-motion'
import  { FC } from 'react'

interface IProps {
    children: string,
    classname?: string
}  


const AnimatedText : FC<IProps>= ({children, classname}) => {
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
  return (
    <motion.span 
        className={classname}
        transition={{  staggerChildren: 0.2, type: "spring"}}
        initial="hidden"
        animate="visible"
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