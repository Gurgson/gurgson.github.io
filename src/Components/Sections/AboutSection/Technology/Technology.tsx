
import { FC } from 'react'
import getTechIcon, { Technlogies } from "../../../../helpers/returnTechIcon";
interface IProps {
    name: Technlogies,
    className?: string,
    hoverTop?: boolean
}
const Technology : FC<IProps> = ({name, className, hoverTop }) => {
  const tech = getTechIcon(name);
  return (
    <button 
    type='button'
    style={{borderColor: tech.color}}
    className={` ${className} group rounded-[50%] p-2 border-4 justify-center items-center bg-slate-700/90 z-20 `}>
       <div className=' overflow-hidden w-[60px] sm:w-[75px] aspect-square'>
        {tech.icon}
       </div>
       <figcaption  className={`absolute  rounded   group-focus:opacity-100 group-hover:opacity-100 opacity-0 transition-all duration-300 bg-orange-600/40 px-2 py-1  ${(hoverTop)?"-top-10":"-bottom-10"} left-1/2 -translate-x-1/2`}>{name}</figcaption>
       
    </button>
  )
}

export default Technology