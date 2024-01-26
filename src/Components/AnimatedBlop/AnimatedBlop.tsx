import { Variants, motion } from "framer-motion"
import { FC } from "react"
interface IProps  {
    className : string
}
const AnimatedBlop : FC<IProps> = ({className}) => {
    const blopAnimationSet : Variants= {
        initial: {
            d: "M35.7,-15.1C40.5,3.1,34.6,21.3,18.7,35C2.8,48.7,-23.1,58,-40.5,47.3C-58,36.6,-67,6,-58.8,-16.8C-50.7,-39.6,-25.3,-54.6,-4.9,-53C15.5,-51.3,30.9,-33.2,35.7,-15.1Z", 
            
        },
        end: {
            d: "M24.5,-5.5C32.9,17.9,41.7,43.6,35.5,47.9C29.3,52.2,8.2,35,-10.7,20C-29.6,5,-46.3,-7.7,-44.2,-22.5C-42,-37.3,-21,-54.1,-6.5,-52C8.1,-49.9,16.1,-28.9,24.5,-5.5Z"
        }
    }
        
    return (
    <svg  className={`absolute ${className} bg-transparent `} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        
  
            <motion.path 
            variants={blopAnimationSet} 
            initial="initial" 
            animate="end" 
            transition={{
                duration: 20,
                repeatType: "mirror",
                repeat: Infinity
            }}
            className=""   
            transform="translate(100 100)" />

    </svg>
  )
}

export default AnimatedBlop