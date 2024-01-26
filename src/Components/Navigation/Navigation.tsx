import { motion } from "framer-motion"
// import { Link, NavLink } from "react-router-dom"
import { FadeInTop } from "../../helpers/animation"
import { HashLink } from 'react-router-hash-link';
type Tlinks = {
    innerHTML: string,
    href: string,
} 
const Navigation = () => {
    const links : Tlinks[] = [
        {
            href: "/#projects",
            innerHTML: "my work",
        },
        {
            href: "/#about",
            innerHTML: "about me"
        },
        {
            href: "/#contact",
            innerHTML:  "Reach out"
        }
    ]
    return (
    <motion.nav 
    variants={FadeInTop}
    initial= "initial"
    animate="end"
    transition={{duration: 1, delay: 1.3}}
    className=" z-50 container absolute top-0 left-0 h-8 flex items-center text-lg justify-end gap-6 px-8 md:gap-12 py-12 md:px-16 capitalize text-accent">
        {
            links.map((item, index)=>
            <HashLink 
                to={item.href} 
                key={`nav-item-${index}`}
                className="hover:text-tetriary duration-500 transition-all shadow"
                >
                {
                    item.innerHTML
                }
            </HashLink>)
        }
    </motion.nav>
  )
}

export default Navigation