
import {  motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef  } from "react"


interface IProps {
    imgUrl: string,
    children: string

}
const Divider : FC<IProps>= ({imgUrl, children}) => {
  const container = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end center"]
  })
  const pathLength = useTransform(scrollYProgress, [0,1], [0,1]);

  return (
    <div
        ref={container}
        style={{ backgroundImage: `url('${imgUrl}')`}}
        className={` relative  h-[50vh] min-h-[300px] bg-center  bg-no-repeat bg-cover bg-fixed`}
    >
      <svg className=" w-[180px] h-1/2 absolute top-0 right-0 fill-none  stroke-orange-500/35 z-10" viewBox="0 0 100 100">
        <motion.path d="M0,0 100,0 100,100" strokeWidth={40} pathLength={pathLength}/>
      </svg>
      <div className=" absolute w-full h-full top-0 left-0 bg-slate-800/90"/>
      <span className="absolute text-6xl uppercase tracking-widest text-center  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
      <svg className=" w-[180px] h-1/2 absolute rotate-180 bottom-0 left-0 fill-none  stroke-orange-500/35 z-10" viewBox="0 0 100 100">
        <motion.path d="M0,0 100,0 100,100" strokeWidth={40} pathLength={pathLength}/>
      </svg>
    </div>
  )
}

export default Divider