import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
        <footer className="relative ">
            <h1 className=' z-10 [text-shadow: 0_0_4px_4px_var(--color-tetriary)] text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'>Jakub Stapiński <span className=' text-tetriary'>&copy;</span> {date.getFullYear()}</h1>
            <h2 className='  z-10 text-2xl text-white/90 absolute bottom-1/4 left-1/2 -translate-x-1/2'>I hope to see you soon!</h2>
            <img className="w-full h-[400px" src="/src/assets/footer-bg.svg" alt="" />
        </footer>
  )
}

export default Footer