import classNames from "classnames"

const About = ()=>{
    return(
        <>
        <div id="ABOUT" className={classNames("font-Inter font-medium dark:text-slate-400 mb-24 text-lg text-justify lg:p-4")}>
        <h1 className={classNames("font-Inter mb-3 lg:pt-4 py-2 lg:pb-4 pr-4 dark:text-white font-bold sticky lg:relative top-0 dark:bg-slate-900/[.05] backdrop-blur-md")}>ABOUT</h1>
        <p className="mb-3 leading-8">Hey! My name is James, I was graduated from the University of Tasmania, majoring in Information Technology and Systems.</p>
        <p className="mb-3 leading-8">I'm a software engineer specializing in building accessible digital experiences. Currently, I'm focused on building accessible, human-centered products at <a href="http://www.cqu.edu.cn" className="ltrEffect">Chongqing University.</a></p>
        <p className="mb-3 leading-8">When I'm not on the computer, I enjoy video games, travelling, and petting dogs.</p>
        </div>
        </>
    )
}
export default About