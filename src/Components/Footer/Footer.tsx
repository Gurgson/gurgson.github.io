import { useInView,motion } from 'framer-motion';
import Highlight from '../Higlight/Highlight';
import { useRef } from 'react';
import { fadeFromBottom } from '../../helpers/animation';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once: true})
    const date = new Date();
  return (
        <motion.footer 

            ref={ref}
            className=" flex flex-col justify-center pt-10 items-center  relative bg-[url('/src/assets/footer-bg.svg')] min-h-[400px]  bg-no-repeat bg-cover">
            <motion.h1 initial="initial"animate={(isInView)?"end":""} transition={{duration: 1.2, }} variants={fadeFromBottom} className=' z-30 text-4xl'>Jakub Stapiński <Highlight>&copy;</Highlight> {date.getFullYear()}</motion.h1>
            <motion.h2  initial="initial"animate={(isInView)?"end":""} transition={{duration: 1.2, delay: 1}}  variants={fadeFromBottom} className='  z-30 text-2xl'>I hope <Highlight>to see</Highlight> you soon!</motion.h2>
            <Link to="https://github.com/Gurgson">
              <FaGithub className=" text-6xl mt-5 hover:text-tetriary transition-all duration-500"/>
            </Link>
        </motion.footer>
  )
}

export default Footer