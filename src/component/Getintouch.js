import classNames from "classnames"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import EastIcon from '@mui/icons-material/East';
import Resume from '../Resume-Guoanliu.pdf'
const Contact = ()=>{
    return(
        <>
        <div id="CONTACT" className={classNames("font-Inter text-justify font-thin dark:text-slate-400 mb-24 text-md lg:p-4")}>
        <h1 className={classNames("font-Inter mb-3 lg:pt-4 py-2 lg:pb-4 pr-4 dark:text-white font-bold sticky lg:relative top-0 dark:bg-slate-900/[.05] backdrop-blur-md uppercase")}>Let's Get in touch!</h1>
        <div className="flex w-full">
        <p className="mb-3 w-0 grow-[3] leading-8 pr-3">Although I’m not currently looking for any new opportunities, my inbox will always be open. Whether you have a question or just want to say hi, I’ll try my best to get back to you ASAP! <br/><br/> Use the Right Icons to send a message or grab a resume<EastIcon sx={{ml:3}} className="animate-bouncex"/></p>
        <div className="mb-3 w-0 grow-[1] dark:text-white flex flex-col justify-between items-end">
            <a href="mailto:guoanl@cqu.edu.cn"><MailOutlineIcon sx={{fontSize:48}}/></a>
            <a href={Resume}><SimCardDownloadIcon sx={{fontSize:48}}/></a>
        </div>
        </div>
        </div>
        </>
    )
}
export default Contact