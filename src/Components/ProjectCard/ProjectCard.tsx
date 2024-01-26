import  { CSSProperties, FC, useRef, useState } from 'react'
import { TProjectData } from '../../data/project'
import { Link } from 'react-router-dom'
import { useInView, motion } from 'framer-motion'
import { opacityUp } from '../../helpers/animation'



interface IProps {
    data: TProjectData
    index: number
}
const ProjectCard : FC<IProps> = ({data,index: index}) => {
  const [isReversed] = useState<boolean>(index%2===1);
  const ContainerRef = useRef<HTMLDivElement>(null);
  const isInview = useInView(ContainerRef, {once: true});
  //diamonds 
  const diamonds = Array.from({length: index+1}, (_, index)=>
  {
    const styleSheet : CSSProperties= (!isReversed)?{
      top: index%2===0?`${25*index}px`:`0`,
      left: index%2===1?`${22.5*(index+1)}px`:`0`,
    }:{
      top: index%2===0?`${25*index}px`:`0`,
      right: index%2===1?`${22.5*(index+1)}px`:`0`,
    }
    return <motion.span
      style={styleSheet}
      variants={opacityUp}
      key={`${data.title}-diamond-${index}`} 
      className={`z-20 clip-polygon w-[65px] h-[65px] absolute ${isReversed?"bg-gradient-to-bl":"bg-gradient-to-br"} from-slate-900 via-slate-800 to-slate-500  shadow-2xl  -translate-y-1/2 ${(isReversed)?"translate-x-1/2 ":"-translate-x-1/2 "} `}
      ></motion.span>}
  );
  return (
    <div
      // container 
      ref={ContainerRef}
      className={` relative flex flex-col ${isReversed?"md:flex-row-reverse":"md:flex-row"} z-10  mx-8 md:max-w-3xl bg-transparent`}
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
      className=' relative md:w-3/5 ' >
        <div className='absolute w-full h-full'>
         {diamonds} 
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
        className={' absolute top-0 left-0 w-full h-full bg-slate-800/60'}/>
        <p 
        // project tag (front/back-end, fullstack)
        className={`md:bottom-3 md:top-[auto] top-3  right-3  ${isReversed?"md:rigth-3":"md:left-3"} uppercase  absolute  font-bold text-lg `}><span className=' text-tetriary'># </span> {data.tag}</p>
        <h3 className=' md:hidden absolute bottom-0 p-2 w-full text-center bg-slate-900/70 border-b-2 border-b-primary  left-1/2 -translate-x-1/2 z-20 text-2xl sm:text-6xl '> {data.title}</h3>
      </motion.div>
      
      
      
      <div 
      //side container
      className={`flex flex-col justify-between md:gap-0 gap-8 py-4  h-full md:w-2/5 z-10 ${isReversed?"":" md:text-end"}`} >
  
          <h1 className={` hidden md:block text-xl border-b-4 border-${isReversed?"l":"r"}-4  drop-shadow-2xl pb-1 pr-1 border-primary text-center rounded-e rounded-t-none uppercase`}> 
            <span className="text-tetriary"> {index+1}. </span>
           {data.title}
          </h1>
          <div className={ ` relative bg-primary md:w-[145%] ${isReversed?"":"md:-translate-x-28"} p-2 rounded drop-shadow-md text-start min-h-[70px]`}>
            <p className=''>
              {
              data.description
            }
            </p> 
          </div>
          <ul className='px-4 list-image md:text-xs md:columns-2 text-start'>
            {
              data.technologies.map((item, i)=><li key={`tech-list-item-${i}`} className=''>
                <span className=' text-tetriary'> &lt; </span>
                <span>{item}</span>
                <span className=' text-tetriary'> &#47;&gt; </span>

              </li>)
            }
          </ul>
          <div className={`flex justify-start pl-4  md:${isReversed?"":"justify-end"}  uppercase gap-3`}>
                {
                  Object.entries(data.links).sort().map((item,i)=>
                  <Link
                    target="_blank" 
                    className=' bg-primary px-2 py-1'
                    key={`${data.title}-external-link-${i}`} 
                    to={item[1]}>
                      <p className=' hover:scale-95 hover:text-tetriary hover:-translate-y-1  transition-all duration-300'>{item[0]}</p>
                  </Link>)
                }
          </div>
      </div>
    </div>
  )
}

export default ProjectCard