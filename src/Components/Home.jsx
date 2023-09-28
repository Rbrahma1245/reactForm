import React from 'react'

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', width: '100%'}}>
      <div style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
        <div style={{ textAlign: 'left', paddingRight:'3rem' }}>
          <h3>SEARCHING FOR A JOB ?</h3>
          <h3>FIND YOUR NEXT</h3>
          <h3>DREAM JOB</h3>
        </div>

        <div style={{width:'50%'}}>
          <select style={{ width: '200px', marginTop: '1rem', height: '50px' }}>
            <option>Data scientist.</option>
            <option>Python</option>
            <option>Web Developer</option>
            <option>Java</option>
            <option>Python</option>

          </select>

        </div>
      </div>



    </div>
  )
}

export default Home