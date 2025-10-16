import React, { useState } from 'react'
const contact = () => {
  const[form,SetForm]=useState({
    name:'',
    gender:'',
    email:'',
    password:'',
    department:''
  })
  const handleChanges=(e)=>{
    const {name,value}=e.target;
    SetForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" onChange={handleChanges} name="name" value={form.name}/><br></br>
        <label>Gender</label>
        <input type="radio" name="gender" value="Male" onChange={handleChanges} checked= {form.gender === 'Male'}/>Male
        <input type="radio" name="gender" value="Female" onChange={handleChanges} checked={form.gender === 'Female'}/>Female <br />
        <label>Email :</label>
        <input type="text" onChange={handleChanges} name="email" value={form.email}/><br></br>
        <label>Password :</label>
        <input type="password" onChange={handleChanges} name="password" value={form.password}/><br></br>
        <label>Department :</label>
        <input type="text" onChange={handleChanges} name="department" value={form.department}/><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default contact;