import classNames from "classnames"
const Footer = ()=>{
    return(
        <>
        <div id="Getintouch" className={classNames("font-Inter font-bold dark:text-slate-400 text-sm lg:pb-16 lg:px-4")}>
        <p className="leading-8 text-justify">This project is named as <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Spotlight</span>. Designed, Developed, and Deployed by <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Guoan Liu（James）</span>, Bootstrapped with <a className="hover:underline" href="http://react.com">React.js</a>  and <a className="hover:underline" href="https://tailwindcss.com/">TailwindCss</a>, All Icons and texts are set in <a className="hover:underline" href="https://mui.com/material-ui/material-icons/">Material UI</a> & <a href="https://rsms.me/inter/" className="hover:underline">Inter</a> typeface respectively.</p>
        </div>
        </>
    )
}
export default Footer