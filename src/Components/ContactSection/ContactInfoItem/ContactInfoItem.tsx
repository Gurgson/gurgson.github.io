import  { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Highlight from '../../Higlight/Highlight'
export type TContactInfoItem =  {
    tag: {
        icon: ReactNode
        name: string,
    }
    target: {
        name: string,
        url: string,
    },
    isMail?: boolean
}
interface IProps {
    data: TContactInfoItem
}
const ContactInfoItem : FC<IProps>= ({data}) => {
  return (
    <figure className=" max-w-[155px] grid gap-1 group">
        <div className='flex gap-2 items-center cursor-pointer'>
            <span className=' text-2xl  group-hover:animate-pulse'>{data.tag.icon}</span>  
            <Highlight>-</Highlight>
            <span className=' font-bold capitalize relative'>
                <span>{data.tag.name}</span>
                <span className='absolute -bottom-1 w-0 group-hover:w-3/4 transition-all duration-300 border-b-2 border-b-tetriary left-1/2 -translate-x-1/2'></span>
            </span>  
        </div>
        <figcaption className=" indent-4 underline uppercase wide">
            <Link to={data.target.url} target={`${data.isMail?"":"_blank"}`}>
                {data.target.name}
            </Link>
        </figcaption>
    </figure>
  )
}

export default ContactInfoItem
