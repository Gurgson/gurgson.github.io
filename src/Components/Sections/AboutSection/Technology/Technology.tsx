
import { FC, MouseEventHandler } from 'react'
import getTechIcon, { Technlogies } from "../../../../helpers/returnTechIcon";
export type TTechnology = {
    name: Technlogies,
    
    position: {
      x: number,
      y: number,
      big?: boolean
    }
}
interface IProps {
  data: TTechnology,
  isActive? :boolean,
  handleHover: MouseEventHandler
}
const Technology : FC<IProps> = ({data, handleHover, isActive}) => {
  const tech = getTechIcon(data.name);
  
  return (
    <figure
    onMouseOver={handleHover}
    style={{
      gridColumn: data.position.big ? `${data.position.x} / span 2` : data.position.x,
      gridRow: data.position.big ? `${data.position.y} / span 2` : data.position.y,


    }}
    className={` grid transition-all  duration-500  cursor-pointer ${isActive && "grayscale translate-y-2 scale-105"} ${(isActive && data.name === Technlogies.express ) &&  "bg-gray-700  box-border p-4"}`}>
  
        {tech.icon}
     </figure>
  )
}

export default Technology