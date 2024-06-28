import CallMadeIcon from '@mui/icons-material/CallMade';
import classNames from 'classnames';
import { useState } from 'react';
const Experience = () => {
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
    const expList = [
        {
            id:1,
            timeFrom: 'JUN-2021',
            timeTo: 'CURRENT',
            position: 'SDE',
            companyName: 'Chongqing University',
            jobDuty: 'Build, style, and ship high-quality websites, designed systems, mobile apps, and cross-platform digital experiences for students and staff using technologies such as JavaScript, TypeScript, Vue.js, Tailwind CSS, and more. Involved in the development and architecture of technical tools like content management systems, RESTful APIs, and continuous integration pipelines to fulfill university’s business requirement',
            languages: ['Javascript', 'React','Typescript','Node.js','Firebase','Docker'], 
            website:'http://www.cqu.edu.cn'
        },
        {
            id:2,
            timeFrom: 'JAN',
            timeTo: 'MAY 2021',
            position: 'Software Engineer Intern',
            companyName: 'Panda PTE',
            jobDuty: 'Developed, maintained, and shipped production code for clients websites primarily using HTML, CSS, Sass, JavaScript, and jQuery, Performed quality assurance tests on various sites to ensure cross browser compatibility and mobile responsiveness, Engineered and improved major features of PTE online practice applications by using ES6, Python, Sortablejs, Anime.js, and Node.js',
            languages: ['Javascript','Jquery','HTML5','MongoDB'],
            website:null
        },
    ]
    return (
        <>
            <div id='EXPERIENCE' className="font-Inter dark:text-slate-200 mb-24 text-lg text-justify">
                <h1 className="font-Inter mb-3 dark:text-white font-bold py-2 lg:p-4 lg:relative uppercase sticky top-0 dark:bg-slate-900/[.05] backdrop-blur-md z-10">Experience</h1>
                {expList.map((item) => {
                    return (
                        <a href={item.website} key={item.id}>
                        <div onMouseMove={()=>hoverPosition(item.id)} onMouseOut={hoverPositionLeave} key={item.id} className={classNames("my-3 lg:my-0 transition ease-in-out duration-300 box-border lg:flex rounded-lg lg:p-4 relative lg:hover:bg-zinc-400/[.05] hover:cursor-pointer lg:hover:shadow-xl",spotLightExpItem(item.id))}>
                            
                            <div className="lg:w-0 lg:grow-[2] font-semibold text-sm mb-2">{item.timeFrom} - {item.timeTo}
                            </div>

                            <div className="lg:w-0 lg:grow-[3]">
                            <div className={classNames("mb-3 font-semibold text-sm duration-700",{'dark:text-teal-500 text-blue-500 lg:translate-x-1 lg:-translate-y-1':positionStatus===item.id})}>
                                {item.position} ｜ {item.companyName} <CallMadeIcon sx={{ fontSize: 16 }}/>
                            </div>
                            <p className="mb-4 font-thin text-sm leading-6">{item.jobDuty}</p>
                            <div className="flex text-xs flex-wrap">
                                {item.languages.map((item,index)=>{return(
                                    <>
                                    <span key={index} className="px-3 py-2 rounded-full bg-zinc-400/[.10] dark:bg-teal-400/[.10] mr-1 box-border text-blue-500 dark:text-teal-300 my-1">{item}</span>
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

export default Experience