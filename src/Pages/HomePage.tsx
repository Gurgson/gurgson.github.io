import ContactSection from "../Components/ContactSection/ContactSection"
import Divider from "../Components/Divider/Divider"
import AboutSection from "../Components/Sections/AboutSection/AboutSection"
import HeroSection from "../Components/Sections/HeroSection/HeroSection"
import ProjectSection from "../Components/Sections/ProjectSection/ProjectSection"

const HomePage = () => {
  return (
    <>
        <HeroSection/>
        <Divider imgUrl="/dividers/divide-projects.jpg">My work</Divider>
        <ProjectSection/>
        <Divider imgUrl="/dividers/divide-about.jpg">Who am I?</Divider>
        <AboutSection/>
        <Divider imgUrl="/dividers/divide-contact.jpg">Reach me</Divider>
        <ContactSection/>
        

    </> 
  )
}

export default HomePage