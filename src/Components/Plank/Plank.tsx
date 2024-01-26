import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
interface IProps {
    zindex: number,
    rotate: string,
    className?: string,
    children?: string

}
const Plank : FC<IProps> = ({zindex, rotate, className, children}) => {
    const [clicks, setClicks] = useState<number>(2)
    return (
    <motion.button
        
        style={{rotateZ: rotate, zIndex: zindex }}
        animate={
            clicks<=0?{y:"300%", opacity: 0, rotateX: "5deg", transition:{duration:2.5, type:"spring ", }}:""}
        className={` text-4xl [text-shadow:0px_1px_0px_rgba(40,40,40,.3),_0px_-1px_0px_rgba(0,0,0,.7)] text-center  font-bold absolute bg-[url('/decorations/plank.png')] bg-cover w-full min-w-[500px] h-[125px] bg-no-repeat  ${className}`}
        whileTap={
            {
                scale:0.95, 
                transition:{
                    duration:0.2,
                    type: "spring"
                
                }
            }
        }
        onClick={()=>setClicks((v)=>v-1)}
        >
            {children}
        </motion.button>
  )
}

export default Plank