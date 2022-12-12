import React, { useRef } from 'react'
import {useGsapFooterHeadLine} from '../hooks/gsap'
const Footer = () => {

  const footerRef =useRef(null)
  const footerHeadLineRef=useRef(null);
useGsapFooterHeadLine(footerHeadLineRef,footerRef)

  return <section className="footer wrapper" ref={footerRef}>
    <h1 ref={footerHeadLineRef}>Bonjour</h1>
    <p> &copy;{new Date().getFullYear()} immemorial Crafted by yours truly</p>
  </section>
}

export default Footer
