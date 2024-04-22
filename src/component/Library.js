import classNames from "classnames"
import CustomizedSwitches from "./MaterialUISwitch";
import React from "react";
import { useState } from "react";
import WestIcon from '@mui/icons-material/West';
import { Outlet, useNavigate } from "react-router-dom"
import reactlogo from '../assets/images/logo.svg'
import ShareIcon from '@mui/icons-material/Share';
import musicplayer from '../component/library/musicPlayer/static/musicplayer.png'
const Library = () => {
    const effects = [
        {
            id:0,
            name:'Shadow Effects',
            img:reactlogo,
            description:'Text display with strong shadow effects, the effects are not complicated. However at least I learned something new!',
            link:'James.shadowLink',
            path:'shadowwords',
        },       
        {
            id:1,
            name:'Music Player',
            img:musicplayer,
            description:'A beautiful music player constructed using Material UI components with lyrics scrolling effect, the overall style is adopted from Taylor swifts--Lover',
            link:'James.musicPlayer',
            path:'musicplayer',
        },
    ]
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light');
    React.useEffect(() => { setTheme('light') }, [])
    const getMode = (mode) => {
        setTheme(mode)
    }
    return (
        <>
            <div className={classNames("font-Inter min-h-screen w-full px-24 py-16 min-w-[768px] bg-[#f8fafc] dark:bg-slate-900 bg-[url('assets/images/beams-pricing.png')] dark:bg-none bg-repeat-x bg-contain ", { "dark": theme === "dark" })}>
            <div className="flex justify-between py-2 pl-1 dark:text-teal-300">
            <div className="flex items-center cursor-pointer group transition-all" onClick={()=>navigate('/')}>
            <span className="flex items-center group-hover:-translate-x-1 duration-200"><WestIcon sx={{fontSize:16}}></WestIcon></span>
            <a className="font-medium ml-1">GUOAN LIU</a>
            </div>
            <CustomizedSwitches onGetMode={getMode}/>
            </div>
            <h1 className="md:text-xl lg:text-4xl font-bold dark:text-teal-300">Libraries</h1>
            <h1 className="md:text-2xl lg:text-5xl font-bold dark:text-teal-300 text-center py-8">JAMES'S CREATIVE <span className="relative text-blue-500 z-10 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-teal-300 dark:to-blue-500">WORKSHOP</span></h1>
            <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 dark:text-white">
            {effects.map(item=>{return <a href={'library/'+item.path} key={item.id} className="group p-6 hover:bg-slate-100/[.05] hover:shadow-md transition-all duration-200 cursor-pointer rounded-xl"><div className="w-12 h-12 rounded overflow-hidden flex justify-center items-center p-1 shadow-lg mb-6"><img src={item.img}></img></div> <h4 className="font-bold mb-4">{item.name}</h4><p className="mb-4 text-slate-500 font-light">{item.description}</p><div><span className="group-hover:text-blue-500 duration-200 dark:group-hover:text-teal-300"><ShareIcon/></span><span className="text-xs ml-4 font-medium group-hover:text-blue-500 duration-200 dark:group-hover:text-teal-300">{item.link}</span></div></a>})}
            </div>
            </div>
        </>
    )
}
export default Library