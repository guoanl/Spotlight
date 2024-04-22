import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
const Head = ()=>{
    const navigate = useNavigate();
    const [headMenu,setHeadMenu] = useState('')
    const handleHeadMenu = (id)=>{
        setHeadMenu(id)
    }
    const handleMenuIcon = (id)=>{
        if(id===headMenu) return{ fontSize:16,display:'inline'}
        else return { fontSize:16,display:'none'}
    }
    const headList = [{
        id:1,
        title:'ABOUT'
    },{
        id:2,
        title:'EXPERIENCE'
    },{
        id:3,
        title:'PROJECTS'
    },{
        id:4,
        title:'CONTACT'
    }]
    return (
        <div className=" py-16 font-Inter dark:text-white lg:fixed lg:flex lg:flex-col lg:justify-between lg:h-screen lg:w-2/7 box-border lg:py-20">
        <div className=''>
        <div className=" mb-3 text-4xl font-bold lg:text-6xl lg:mb-9 uppercase">James Liu</div>
        <div className=" mb-3 text-md font-medium lg:text-3xl lg:mb-3">Software Engineer</div>
        <div className=" mb-6 text-xs font-thin lg:text-xl lg:mb-28">I build exceptional digital experiences</div>
        <ul className=' hidden lg:my-2 lg:flex lg:flex-col font-bold text-sm'>
        {headList.map(item=>{return(
           <a href={`#${item.title}`} key={item.id} className='w-1/3'> <li onClick={()=>handleHeadMenu(item.id)} className={classNames(' hover:text-blue-500 dark:hover:text-teal-300 hover:translate-x-3 transition duration-300 py-2 cursor-pointer',{'text-blue-500 dark:text-teal-300 translate-x-3':headMenu===item.id})}><EastTwoToneIcon sx={handleMenuIcon(item.id)}/> {item.title}</li></a>
        )})}
           <a className='w-1/3' onClick={()=>navigate('/library')} ><li className={classNames('hover:text-blue-500 dark:hover:text-teal-300 hover:translate-x-3 transition duration-300 py-2 cursor-pointer dark:text-white')}>LIBRARY</li></a>
        </ul>
        </div>
        <div className='w-1/2 flex justify-start'>
        <GitHubIcon className='mr-4'/>
        <InstagramIcon className='mr-4'/>
        <XIcon className='mr-4'/>
        <MailOutlineIcon className='mr-4'/>
        <FacebookIcon/>
        </div>
        </div>
    )
}

export default Head