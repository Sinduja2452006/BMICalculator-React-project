import React, { useEffect, useState } from 'react'

function Fetchdata() {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[])
  return (
    <div>
      {
      user.map((item,index)=>(
         <p key={index} style={{fontFamily:"cursive"}}>
          <p>ID:{item.id}</p>
          <p>Name:{item.name}</p>
          <p>Email Id:{item.email}</p>
          <p>City:{item.address.city}</p>
          <p>Company Name:{item.company.name}</p>
          <br/><br/>
         </p>
      ))
    }
    </div>
  )
}

export default Fetchdata