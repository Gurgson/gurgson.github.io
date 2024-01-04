import { Link } from "react-router-dom"
type Tlinks = {
    innerHTML: string,
    href: string,
} 
const Navigation = () => {
    const links : Tlinks[] = [
        {
            href: "/#Projects",
            innerHTML: "my work",
        },
        {
            href: "/#About",
            innerHTML: "about me"
        },
        {
            href: "/#Contact",
            innerHTML:  "Reach out"
        }
    ]
    return (
    <nav className=" z-50 container absolute top-0 left-0 h-8 flex items-center text-lg justify-end gap-12 py-12 px-16 capitalize text-accent">
        {
            links.map((item, index)=>
            <Link 
                to={item.href} 
                key={`nav-item-${index}`}
                className="hover:text-tetriary duration-500 transition-all shadow"
                >
                {
                    item.innerHTML
                }
            </Link>)
        }
    </nav>
  )
}

export default Navigation