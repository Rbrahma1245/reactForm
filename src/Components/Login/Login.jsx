import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'


function Login() {

  let [form, setForm] = useState({
    email: '',
    pass: '',
  })


  function commonHandler(e) {
    let { name, value } = e.target
  
    setForm((prev) => {
      return { ...prev,  [name]: value }
    })
  }


  function submitHandler() {
    let { email,  pass } = form
    if (email == '' || pass == '') {
      alert('Please fill the details')
    }
  
   console.log(form);
  }

 




  return (
    <div className='login-form mt-5'>
      <div className='form-box'>
        <h3>LOGIN </h3>

       
        <input type='email' name='email' placeholder='Enter your Email' onChange={commonHandler} />
        <input type='password' name='pass' placeholder='Enter your password' onChange={commonHandler} /> 

        <button className='submitbtn' onClick={submitHandler}>LOGIN</button>

        <div style={{textAlign:'left', marginTop:10}}>Don't have an account ?  <NavLink to="/signup">Sign up</NavLink> </div>
      </div>
    </div>
  )
}

export default Login