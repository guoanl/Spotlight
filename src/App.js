import Head from "./component/Head"
import SectionOtherThanHead from "./component/SectionOtherThanHead"
import React, { useEffect, useState } from "react";
import CustomizedSwitches from "./component/MaterialUISwitch";
import classNames from "classnames";
export default function App() {
  useEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = 'smooth'
    document.body.style.scrollBehavior = 'smooth'
  }, []);

  const [theme, setTheme] = React.useState('light'); 
  React.useEffect(()=>{setTheme('light')},[])
  const getMode = (mode)=>{
    setTheme(mode)
  }
  return (
    <div className={classNames("relative w-full px-24 min-w-[768px]  dark:bg-slate-900",{"dark":theme==="dark"})}>
      <div className="absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-cyan-100 via-purple-100 to-white bg-no-repeat bg-right-top -z-10 opacity-40 blur-xl"></div>
      <div className="max-w-screen-2xl lg:flex mx-auto ">
      <Head></Head>
      <div className="lg:flex-1"></div>
      <div className="lg:flex-1">
        <div className="hidden lg:flex justify-end rounded-xl right pt-3">
          <CustomizedSwitches onGetMode={getMode} />
        </div>
        <SectionOtherThanHead/>
      </div>
      </div>
    </div>
  )
}
