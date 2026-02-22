import React,{useState} from 'react'

function Employeeinfo() {
    const[emp,setEmp]=useState({
    fullName:"",
    phone:" ",
    skill:[],
    country:""
})
const handleEmployee=(e)=>{
    setEmp((prev)=>({
        ...prev,
        [name]:type==="checkbox" ?
        checked:
        [...pre.skill,value]:


    })
}
  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' name='fullName' value={emp.fullName} onChange={handleEmployee}/>
        <label>Phone Number</label>
            <input type='text' name='phone' value={emp.phone} onChange={handleEmployee}/>
            <label>Skills</label>
            <input type='checkbox' name='Skill' value={"JAVA"} onChange={handleEmployee}/>
            <input type='checkbox' name='Skill' value={"REACT"} onChange={handleEmployee}/>
             <input type='checkbox' name='Skill' value={"ANGULAR"} onChange={handleEmployee}/>
            < br/> < br/> < br/>
            <label>Country</label>
            <select name='country'>

                <option value={""}>Select</option>
            
     </select>
      </form>
    </div>
  )
}

export default Employeeinfo
