import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'

function Header({searchValue, setSearchValue}) {
  
  return (
    <div className='header' >
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">

<Link to="/" onClick={()=>setSearchValue('')} className="  navbar-brand text-danger" >пользователи гитхаба</Link>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon text-light"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
  <form className="  d-flex">
    <input value={searchValue} onChange={(event)=> setSearchValue(event.target.value)} className=" form-control  me-2" type="search" placeholder="поиск пользователя" aria-label="Search"/>
   
  </form>
</div>
</div>
</nav>

    </div>
  )
}

export default Header



 {/* <input className="form-control me-2" type="search" placeholder="поиск пользователя" aria-label="Search"/>
    <button onClick={(event)=> console.log(event.target.value)}  className="btn btn-outline-success bg-danger text-light border-danger" type="submit">найти</button> */}