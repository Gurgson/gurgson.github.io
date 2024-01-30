import { useInView,motion } from 'framer-motion';
import Highlight from '../Higlight/Highlight';
import { useRef } from 'react';
import { fadeFromBottom } from '../../helpers/animation';

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once: true})
    const date = new Date();
  return (
        <motion.footer 
            variants={fadeFromBottom}
            ref={ref}
            initial="initial"
            animate={(isInView)?"end":""}
            transition={{staggerChildren: 0.6, delayChildren: 1, duration: 1.5, }}
            className=" flex flex-col justify-center items-center  relative bg-[url('/src/assets/footer-bg.svg')] min-h-[400px]  bg-no-repeat bg-cover">
            <motion.h1 variants={fadeFromBottom} className=' z-30 text-4xl'>Jakub Stapiński <Highlight>&copy;</Highlight> {date.getFullYear()}</motion.h1>
            <motion.h2 variants={fadeFromBottom} className='  z-30 text-2xl'>I hope to see you soon!</motion.h2>
        </motion.footer>
  )
}

export default Footer