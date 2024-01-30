import { FC } from 'react'
interface IProps{
    children: string | string[]
}
const Highlight : FC<IProps>= ({children}) => {
  return (
    <span
    className=' bg-clip-text bg-gradient-to-tr  from-orange-500    to-orange-700 text-transparent'
    >
        {children}
    </span>
  )
}

export default Highlight