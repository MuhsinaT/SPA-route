import React from 'react'
import { useEffect,useState } from 'react'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
    const [user,setUser]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const result=await res.json()
        setUser(result)
        console.log(user)
        
    }
    
  return (
   <>

 <div className='users-table'>
       <table className='table'>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            
        </thead>
    
        <tbody>
             {user.map(item=>(
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                </tr>
             ))}
                
        </tbody>
       </table>
 </div>


<div className="buttonss" style={{marginLeft:'10px'}}>
    <Link to={'/contact'}><button className='btn btn-outline-info' >Contact</button></Link>
    <Link to={'/login'}><button className='btn btn-outline-info ' style={{marginLeft:'10px'}}>Login</button></Link>
</div>
   
   
   </>
  )
}

export default About
