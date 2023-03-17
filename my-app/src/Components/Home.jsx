
import React from 'react'
import Navbar from './Navbar'
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';


function Home(){
  const navigate=useNavigate();
  const[val,setVal]=useState('')
  const[word,setWord]=useState(0)
  const handleChange=(e)=>{
                        const data=e.target.value.split(' ')
                        console.log(data)
                        setVal(e.target.value)
                        
                        setWord(data.length)

                      }

 
  return (
    
 
<>
        <Navbar/>

        <div className="container-fluid">

          <div className="paragraph">
                    Let's Count the words in your URL
          
                   <input type="text" class="form-control" id="formGroupExampleInput" value={val} onChange={(e)=>handleChange(e)} placeholder="www.abd.in"/>
              
          </div>
                <div className='text-center'><p id="show">word count :{word}</p>
                
                 <button type="button" class="btn btn-primary btn-lg" onClick={() => 
                 {navigate("/crud");
            }}>Count</button> 
                </div>

    </div></>
  
)}
export default Home

