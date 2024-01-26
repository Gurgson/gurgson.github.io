import { motion } from 'framer-motion'
import { FC } from 'react'
interface IProps{
  left: string,
  delay: number,
  repeatDelay: number

}
const ShootingStar : FC <IProps> = ({left, delay, repeatDelay}) => {
  return (
    <motion.span
      initial={{
        translateX: 0,
        translateY: "-50px",
        rotate: 315,
        left: left
      }}
      animate={{
        translateX: "-1000px",
        translateY: "1000px",
        rotate: 315

      }}
      transition={{
        duration: repeatDelay || 1.2,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: repeatDelay

      }}
      className={`[box-shadow:0px_0px_3px_5px_white] bg-white absolute rounded-[50%]  h-2 w-2 top-0
        before:absolute before:content-[""] before:top-1/2 before:w-72 before:h-px   before:bg-gradient-to-tr from-white to-slate-100/80
      `}
    />

  )
}

export default ShootingStar