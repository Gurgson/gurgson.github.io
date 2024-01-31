import  {  FC, useRef, useState } from 'react'
import { TProjectData } from '../../data/project'
import { Link } from 'react-router-dom'
import { useInView, motion } from 'framer-motion'
import { FadeFromSide, fadeFromBottom, opacityUp } from '../../helpers/animation'
import { IoMdPerson } from "react-icons/io";
import Highlight from '../Higlight/Highlight'
import AnimatedText from '../AnimatedText/AnimatedText'



interface IProps {
    data: TProjectData
    index: number
}
const ProjectCard : FC<IProps> = ({data,index: index}) => {
  const [isReversed] = useState<boolean>(index%2===1);
  const ContainerRef = useRef<HTMLDivElement>(null);
  const isInview = useInView(ContainerRef, {once: true});

  return (
    <motion.div
      variants={fadeFromBottom}
      initial="initial"
      animate={isInview?"end":""}  
      transition={{
        duration: 2.2,
        type: "spring"
      }}
      ref={ContainerRef}

      className={` relative flex flex-col ${isReversed?"md:flex-row-reverse":"md:flex-row"} z-20  mx-8 md:max-w-3xl bg-transparent`}
    > 

      <motion.div 
      variants={opacityUp}
      initial="initial"
      animate="end"
      transition={
        {
          staggerChildren:0.25,
          duration: 2,
          type: "spring",
          staggerDirection: -1

        }
      }
      className=' relative md:w-3/5 transition-all  group' >
          <Link to={data.links.github} target="_blank">
            <div className='w-[90%] h-[90%] left-[5%] top-[5%] border-8  border-offset border-transparent duration-700 delay-300 group-hover:border-tetriary absolute'>
    
            </div>
            
            {/* <motion.div 
              className={` hidden md:block absolute w-full h-full bg-orange-500/30 rounded -z-[1] ${isReversed?"-right-4":"-left-4"} -top-4`}/>    */}
            <img
              className={`w-full`}
              loading='lazy'
              src={`${data.pfp}`} alt={`${data.title}`} 
            />
            {/* <div
              //  dividing shadow 
              className={` hidden md:absolute w-5 h-full top-[1px] ${isReversed?"-left-5":"-right-5"} bg-gradient-to-t z-[50] bg-slate-500/10 rounded-r ${isReversed?"-skew-y-12":"skew-y-12"}`}
              /> */}
            <div 
            // image shadow
            className={' absolute top-0 left-0 w-full h-full bg-slate-800/60 hover:bg-slate-900/80 duration-700'}/>
            <p 
            // project tag (front/back-end, fullstack)
            className={`md:bottom-3 md:top-[auto] top-3  right-3  ${isReversed?"md:rigth-3":"md:left-3"} uppercase  absolute  font-bold text-lg `}><Highlight># </Highlight> <AnimatedText  delayAnimation={0.7} delayMultiplier={0.6} stopAnimation={!isInview}>{data.tag}</AnimatedText></p>
            <h3 className=' md:hidden absolute bottom-0 p-2 w-full text-center bg-slate-900/70 border-b-2 border-b-primary  left-1/2 -translate-x-1/2 z-20 text-2xl sm:text-6xl '> {data.title}</h3>
            <p className={`absolute top-3 md:top-auto left-3 ${isReversed?"md:left-3":"md:right-3 md:left-auto"}  md:bottom-3  flex  text-xl justify-center items-center gap-2`}> <IoMdPerson className="text-tetriary scale-110"/> 
              {data.people}  
            </p>
        </Link>
      </motion.div>
      
      
      
      <div 
      //side container
      className={`flex flex-col justify-between md:gap-0 gap-8 py-4  h-full md:w-2/5 z-10 ${isReversed?"":" md:text-end"}`} >
  
          <motion.h1  variants={FadeFromSide(isReversed)} initial="initial" animate={isInview?"end":""} transition={{type: "tween", duration:2, delay: 0.4}} className={` relative hidden md:block text-xl border-b-4 border-${isReversed?"l":"r"}-4  drop-shadow-2xl pb-1 pr-1 border-primary text-center rounded-e rounded-t-none uppercase`}> 
            {data.status == "ongoing" && <span className='absolute bottom-10 right-3 text-base'><Highlight>ongoing</Highlight></span>}
            <Highlight> {`${index+1}.`} </Highlight>
           {data.title}
          </motion.h1>
          <motion.div variants={opacityUp} initial="initial" animate={isInview?"end":""} transition={{type: "tween", duration:1, delay: 0.9}} className={ ` relative bg-primary md:w-[145%] ${isReversed?"":"md:-translate-x-28"} p-2 rounded drop-shadow-md text-start min-h-[70px]`}>
            <p className=''>
              {
              data.description
            }
            </p> 
          </motion.div>
          <motion.ul  initial="initial" animate={isInview?"end":""} transition={{delayChildren:1, staggerChildren: 0.5}} className='px-4 list-image md:text-xs md:columns-2 text-start'>
            {
              data.technologies.map((item, i)=><motion.li variants={fadeFromBottom} key={`tech-list-item-${i}`} className=''>
                <Highlight>&lt;</Highlight>
                <span>{item}</span>
                <Highlight> &#47;&gt;</Highlight>
              </motion.li>)
            }
          </motion.ul>
          <motion.div variants={fadeFromBottom} initial="initial" animate={isInview && "end"} transition={{duration:2}} className={`flex justify-between pl-4  md:${isReversed?"":"justify-end"}  uppercase gap-3`}>
                <div className='flex gap-2'>
                {
                  Object.entries(data.links).sort().map((item,i)=>
                  <Link
                    target="_blank" 
                    className=' bg-primary px-2 py-1'
                    key={`${data.title}-external-link-${i}`} 
                    to={item[1]}>
                      <p className=' hover:scale-95 hover:text-tetriary hover:-translate-y-1  transition-all duration-300'>{item[0]}</p>
                  </Link>
                  )
                }
                </div>
          </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard