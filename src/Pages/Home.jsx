import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
  return (
   <>
   
   <div className='d-flex justify-content-center align-items-center container-fluid' style={{ height: "80vh" }}>
        <div className='col-11 col-md-8 col-lg-6 border shadow p-4 text-center'>
          <h1 className='display-4'>Welcome..!</h1>
          <Link to={'/about'} className="btn btn-outline-info mt-4">Users</Link>
        </div>
      </div>
      </>
  )
}

export default Home
