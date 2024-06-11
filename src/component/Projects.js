import CallMadeIcon from '@mui/icons-material/CallMade';
import classNames from 'classnames';
import cqu from '../assets/images/cqu.png'
import gitConsle from '../assets/images/git-console.png'
import spotLight from '../assets/images/spotlight.png'
import foodDelivery from '../assets/images/foodDelivery.png'
import { useState } from 'react';
const Projects = () => {
    const [positionStatus,setPositionStatus] = useState('')
    const hoverPosition = (id)=>{
        setPositionStatus(id)
    }
    const hoverPositionLeave=()=>{
        setPositionStatus('')
    }
    const spotLightExpItem = (id)=>{
        if(!positionStatus){return{}}
        else if (id!=positionStatus){
            return{'lg:opacity-30':true}
        }
    }
    const projectList = [
        {
            id:1,
            projectIMG:cqu,
            projectName: 'Bishan Research Institute CMS',
            projectDescription: 'Customized comprehensive management system for Chongqing University Bishan Institute of Advanced Technology, based on Vue.js and MongoDB, providing registration, login, meeting, booking, personal information management, consulting and other functions.',
            languages: ['Vue.js', 'MongoDB','CI/CD','CMS','Saas','Typescript'], 
            website:null
        },
        {
            id:2,
            projectIMG:gitConsle,
            projectName: 'Git-console',
            projectDescription: 'Github Console is a component that emulates the github code style, presenting some basic information of profession, which can be embedded in any part of the web page',
            languages: ['TailwindCss', 'HTML5','Jquery'], 
            website:'https://guoanl.github.io/Git-console/Git-console/src/index.html'
        },
        {
            id:3,
            projectIMG:spotLight,
            projectName: 'Spotlight',
            projectDescription: 'Spotlight is a beautiful personal website built with Tailwind CSS and React.js, making it a best way to display information regarding work experiences and projects, using a checkbox to switch modes in perfect responsiveness',
            languages: ['TailwindCss', 'HTML5','React','Vercel','Next.js'], 
            website:null
        },        
        {
            id:4,
            projectIMG:foodDelivery,
            projectName: 'Food-Delivery system',
            projectDescription: 'A tiny system for calculating delivered food and generating receipts',
            languages: ['Material UI', 'React CRA','Redux','DaisyUI'], 
            website:"https://food-delivery-two-chi.vercel.app/"
        },
    ]
    return (
        <>
            <div id='PROJECTS' className="font-Inter dark:text-slate-200 mb-24 text-lg text-justify">
                <h1 className="font-Inter mb-3 dark:text-white font-bold py-2 lg:p-4 lg:relative uppercase sticky top-0 dark:bg-slate-900/[.05] backdrop-blur-md z-10">Projects</h1>
                {projectList.map(item => {
                    return (
                        <a href={item.website}>
                        <div onMouseMove={()=>hoverPosition(item.id)} onMouseOut={hoverPositionLeave} key={item.id} className={classNames("my-3 lg:my-0 transition ease-in-out duration-300 box-border lg:flex rounded-lg lg:pt-4 lg:pr-4 lg:pb-4 relative lg:hover:bg-zinc-400/[.05] hover:cursor-pointer lg:hover:shadow-xl",spotLightExpItem(item.id))}>
                            
                            <div className="lg:w-0 lg:grow-[2] font-semibold text-sm mb-2 hidden lg:flex lg:items-start py-1 px-3 lg:justify-center">
                                <img src={item.projectIMG} className='w-3/4 rounded-lg'></img>
                            </div>
                            <div className="lg:w-0 lg:grow-[3]">
                            <div className={classNames("mb-3 font-semibold text-sm duration-700",{'dark:text-teal-500 text-blue-500 lg:translate-x-1 lg:-translate-y-1':positionStatus===item.id})}>
                                {item.projectName} <CallMadeIcon sx={{ fontSize: 16 }}/>
                            </div>
                            <div className="mb-4 font-thin text-sm leading-6">{item.projectDescription}</div>
                            <div className="flex text-xs flex-wrap">
                                {item.languages.map(item=>{return(
                                    <>
                                    <span className="px-3 py-2 rounded-full bg-zinc-400/[.10] dark:bg-teal-400/[.10] mr-1 box-border text-blue-500 dark:text-teal-300 my-1">{item}</span>
                                    </>
                                )})}              
                            </div>
                            </div>
                        </div>
                        </a>
                    )
                })}

            </div>
        </>
    )
}

export default Projects