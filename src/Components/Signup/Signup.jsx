import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./index.css"

function Signup() {
  const navigate = useNavigate();

  let [form, setForm] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    pass: '',

  })
  let [formList, setFormList] = useState([])

  function commonHandler(e) {
    let { name, value } = e.target

    setForm((prev) => {
      return { ...prev, id: new Date().getMilliseconds(), [name]: value }
    })
  }


  function submitHandler() {
    let { name, email, phone, gender, pass } = form
    if (name == '' || email == '' || phone == '' || gender == '' || pass == '') {
      alert('Please fill the details')
    }
    setFormList((pre) => {
      return [...pre, form]
    })
    navigate('/login');
  }

  if (formList.length) {
    localStorage.setItem('user', JSON.stringify(formList));
  }




  return (

    <div className='signup-form mt-5'>
      <div className='form-box'>
        <h3>SIGN UP </h3>

        <input type='text' name='name' placeholder='Enter your Name' onChange={commonHandler} />
        <input type='email' name='email' placeholder='Enter your Email' onChange={commonHandler} />
        <input type='number' name='phone' placeholder='Enter your Phone Number' onChange={commonHandler} />

        <div onChange={commonHandler} style={{textAlign:'left'}}>
          Gender :  
          <input type="radio" name="gender" value="male" />  Male
          <input type="radio" name="gender" value="female" /> Female 
          <input type="radio" name="gender" value="other" /> Other 
        </div>

        <input type='password' name='pass' placeholder='Enter your password' onChange={commonHandler} />  
        <button className='signup-btn' onClick={submitHandler}>SIGN UP</button>

        <div style={{textAlign:'left', marginTop:10}}>Already have an account ?  <NavLink to="/login">Login</NavLink> </div>
      </div>
    </div>
  )
}

export default Signup