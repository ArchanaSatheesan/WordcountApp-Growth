import React from 'react'

import {Link} from 'react-router-dom'



function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse row col-lg-12" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item col-lg-4">
        <Link style={{textDecoration:'inherit',color:'white',fontFamily:'cursive',fontSize:'3vh'}}>WORD COUNTER</Link>
        </li>
        <li className="nav-item col-lg-6">
         
        <Link style={{textDecoration:'inherit',color:'white'}} to='/' >Home</Link>
        </li>
        <li className="nav-item col-lg-2 ">
        <Link style={{textDecoration:'inherit',color:'white'}} to='/crud'>Count View</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar