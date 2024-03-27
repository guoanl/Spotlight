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
    <div className={classNames("mx-auto w-full lg:flex box-border px-24 max-w-screen-2xl min-w-[768px] bg-white dark:bg-slate-900",{"dark":theme==="dark"})}>
      <Head></Head>
      <div className="lg:flex-1"></div>
      <div className="lg:flex-1">
        <div className="hidden lg:flex justify-end rounded-xl right pt-3">
          <CustomizedSwitches onGetMode={getMode} />
        </div>
        <SectionOtherThanHead/>
      </div>
    </div>
  )
}
