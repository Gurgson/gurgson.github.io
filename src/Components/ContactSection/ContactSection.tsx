import { FaGithub,FaLinkedin, FaEnvelope  } from "react-icons/fa";
import ContactInfoItem, { TContactInfoItem } from "./ContactInfoItem/ContactInfoItem";
import Input, { TInputProps } from "../Input/Input";
import {  useRef } from "react";
import { FaSpinner } from "react-icons/fa6";
import { useForm } from "@formspree/react";
import AnimatedText from "../AnimatedText/AnimatedText";
import { motion, useInView } from "framer-motion";
const data : TContactInfoItem[] = [
  {
    tag: {
      icon: <FaGithub/>,
      name: "For developers"
    }, 
    target: {
      name: "github",
      url: "https://github.com/gurgson"
   },
  },
  {
    tag: {
      icon: <FaLinkedin/>,
      name: "For Employers"
    }, 
    target: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jakub-stapinski-aa6a97245/"
   },
  },
  {
    isMail: true,
    tag: {
      icon: <FaEnvelope/>,
      name: "For emails"
    }, 
    target: {
      name: "jaksta65@gmail.com",
      url: "mailto:jaksta65@gmail.com"
   },
  }
]
const formInputs : TInputProps[] = [
  {
    type: "email",
    data: {
      label: "e-mail",
      name: "email",
      placeholder: "Provide your e-mail f.e john.doe@gmail.com",
      required: true
    }
  },
  {
    type: "tel",
    data: {
      label: "phone",
      name: "phone",
      placeholder: "You may provide your phone number",
    }
  },
  {
    type: "textarea",
    data: {
      label: "message",
      name: "message",
      placeholder: "Provide information you want to send",
      required: true
    }
  }
]

const ContactSection = () => {
  const [state, handleSubmit] = useForm("meqyebbz");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {once:true});
  return (
    <section 
    className="relative"
    id="contact">
      <div ref={ref} className=" rounded overflow-hidden mx-2 sm:mx-auto  mt-12 max-w-3xl  sm:grid grid-cols-[40%,1fr] z-10">
          <div
          className="p-6 gap-16 flex flex-col justify-around min-h-[400px] bg-[url('/bgs/bg-contact.svg')] bg-[15%] bg-slate-800 ">
            <h1 className="  text-2xl text-center relative">
              <span>
              <AnimatedText delayMultiplier={0.4}  stopAnimation={!isInView}>
                You may find me here
              </AnimatedText>
              </span> 
              <span className=" absolute -bottom-4 left-1/2 -translate-x-1/2 border-b-2 border-b-tetriary h-1 w-3/4"></span>
            </h1>
            <ul className="grid gap-2 flex-1">
                {
                  data.map((item)=><li  className="peer" key={item.tag.name}><ContactInfoItem  data={item}/></li>)
                }
            </ul>
          </div>
          
          <form 
          className=" h-full bg-slate-800 p-4  relative"
          onSubmit={handleSubmit}
          >
              <motion.fieldset
              initial="initial"
              animate={isInView?"end":"initial"}
              transition={{staggerChildren: 0.3}}
              className="border-2 p-4 sm:px-10 border-tetriary flex flex-col gap-3 justify-start items-start">
                <legend className="p-2 text-2xl">
                  <AnimatedText delayMultiplier={0.4} stopAnimation={!isInView}>
                    Or reach me directly here
                  </AnimatedText> 
                </legend>
                {formInputs.map((item)=><Input key={item.data.name} type={item.type}  data={item.data}/>)}
                <button disabled={state.submitting || state.succeeded} type="submit" className=" flex justify-center items-center w-2/3 px-4 py-2 border-2 hover:border-tetriary hover:text-tetriary mt-8 mb-2 mx-auto rounded transition-all duration-500">
                  {
                  (state.submitting)
                  ?
                  <FaSpinner className=" animate-spin"/>
                  :
                    <AnimatedText delayMultiplier={0.7} stopAnimation={!isInView}>{(state.succeeded)?"Thanks for message!":"Send message!"}</AnimatedText>
                  }
                </button>
                  
              </motion.fieldset>
              
          </form>
      </div>
    </section>
  )
}

export default ContactSection