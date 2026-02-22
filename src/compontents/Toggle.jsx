import React from 'react'
import { useState } from 'react'
function Toggle() {
    const [dark,setDark] =useState ("dark")
  return (
   
    <div style={{backgroundColor:dark==="dark"?"black":"white",
        color:dark==="dark"?"white":"black",height:"100vh"}}>
        <h1> welcome to kce</h1>
      <button onClick={()=>setDark(dark==="dark"?"light":"dark")}>
     {dark==="dark"?"light Theme":"Dark Theme"}</button>
     </div>

  )
}

export default Toggle
