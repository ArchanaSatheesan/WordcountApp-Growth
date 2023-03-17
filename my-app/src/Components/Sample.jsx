import React, { useState } from 'react'
import Navbar from './Navbar'

function Crud() {
  


  return (
<>
    <Navbar/>
    <div>Crud

    <table className="table table-primary table-striped">

    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Domain</th>
      <th scope="col">Word-Count</th>
      <th scope="col">Favourite</th>
      <th scope="col">Action</th>
    </tr>
    </thead>

    <tbody>
    <tr>
      <td>1</td>
      <td>www</td>
      <td>100</td>
      <td>y</td>
      <td>Action</td>
    </tr>
  
    <tr>
      <td>2</td>
      <td>https</td>
      <td>200</td>
      <td>n</td>
      <td>Action</td>
    </tr>
  
    
    
    
  
    
    
  </tbody>

 
  
    </table>

    </div></>



        )

  }
    
    


    


    
  



export default Crud