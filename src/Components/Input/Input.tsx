import { motion } from 'framer-motion'
import { FC, HTMLInputTypeAttribute } from 'react'
import {  opacityUp } from '../../helpers/animation'

export interface TInputProps  {
    type?: HTMLInputTypeAttribute | "textarea",

    data: {
        placeholder: string,
        name: string,
        label?: string
        required?: boolean
    }
}

const Input : FC<TInputProps> = ({type, data}) => {
    const commonAtributes = {
        id: data.name,
        required: data.required || false,
        placeholder: data.placeholder,
        className: ` ${type === "textarea" && "min-h-[125px]"} py-1 px-2 text-primary w-full outline-tetriary transition-all duration-500 border-2 border-transparent hover:border-tetriary`,
    }
  return (
    <>
        <label htmlFor={data.name} className=''> 
            <span className=' capitalize'>{data.label || data.name }</span>
            {data.required && <span className=' text-tetriary '>*</span>}    
        </label>
        {
        (type === "textarea")?
        <motion.textarea 
        {...commonAtributes}
        variants={opacityUp}
        name={data.name}
        />
        :
        <motion.input
        {...commonAtributes}
        name={data.name}
        variants={opacityUp}
        type={type ||"text"}/>
        
        }
    </>
  )
}

export default Input