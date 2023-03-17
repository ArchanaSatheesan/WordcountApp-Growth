import React, { useState } from 'react'
import Navbar from './Navbar'

function Crud() {

  const list= [
    { 
      ID:1,
      Domain:"www",
      Word_Count:"150",
      Favourite:"y",
      
    },

    {
      ID:2,
      Domain:"www",
      Word_Count:"250",
      Favourite:"n",
      

    },
    {
      ID:3,
      Domain:"www.google.com",
      Word_Count:"50",
      Favourite:"n",
      

    },
    {
      ID:4,
      Domain:"www",
      Word_Count:"250",
      Favourite:"y",
      

    },
    {
      ID:5,
      Domain:"https:",
      Word_Count:"550",
      Favourite:"y",
      

    },
  ]

  const[lists,setList]=useState(list)
  return (
<>
    <Navbar/>
    
      <div className='table'>
        <table className="table table-primary table-striped">
          {
            lists.map((current)=>(
             

              <thead>
                  <tr>
                    <td>{current.ID}</td>
                    <td>{current.Domain}</td>
                    <td>{current.Word_Count}</td>
                    <td>{current.Favourite}</td>
                    
                    <td>
                      <button className='edit'>Favourite</button>
                      <button className='delete'>Delete</button>
                      </td>
                  </tr>
                  </thead>
                
            
            ))
            
          }
        </table>

      </div>
      </>


  )

          
    
  
}

function Addlist({setList}){
  function handleSubmit(event){
    const domain=event.target.elements.name.value;
    
   
    
  }
  
  }



export default Crud