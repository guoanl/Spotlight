import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Getintouch";
import Footer from "./Footer";
import React from "react";
const SectionOtherThanHead = ()=>{
    return (
        <>
        <div className="lg:w-full pt-16">
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
        </>
    )
}
export default SectionOtherThanHead