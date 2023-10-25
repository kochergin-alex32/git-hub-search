import React from 'react'
import Cards from '../Cards/Cards'

import '../MainPage/MainPage.css'
import CardPerson from '../CardPerson/CardPerson'
import NotFound from '../NotFound/NotFound'
import SearchCard from '../SearchCard/SearchCard'

function MainPage() {
  return (
    <div className='bg-dark '>
        <div className='component'>
        <div className='header' >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-danger" href="#">пользователи гитхаба</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="поиск пользователя" aria-label="Search"/>
        <button className="btn btn-outline-success bg-danger text-light border-danger" type="submit">найти</button>
      </form>
    </div>
  </div>
</nav>

        </div>
        <div className='content col-12 bg-dark'>

            {/* <Cards/> */}
            <CardPerson/>
            {/* <NotFound/> */}
            {/* <SearchCard/> */}
           
        </div>
        </div>
    </div>
  )
}

export default MainPage














{/* <div className='container  '>
<div className='card-person col-9 bg-dark'>
    <div className='img col-3 bg-light'>
        <img  className='img'src={person} alt="" />
        
        </div>
    <div className='cardBody col-8' >
            <h1>CHRIS WANSTRATH,&nbsp;
                 <a className='text-danger' href="">defunct</a>
                 </h1>
      <ul >
        <li>
            <div>
                <p className='text-danger' >1.3k</p> 
                &nbsp;
                 <span> подписчиков</span>
          </div>
          </li>
        <li>
            <div>
                <p className='text-danger' >210</p> 
                &nbsp;
                 <span> подписок</span>
             </div>
        </li>
              
        <li>
            <div>
                <p className='text-danger' >http://chriswanstrath.com/</p>
            </div>
        </li>
      </ul>
     
    </div>
</div>
<div className='repos col-12'>
            <h1 className='text-light'> РЕПОЗИТОРИИ</h1>
            <a className='text-danger' >Все репозитории</a>
      </div>

<div className='repos-title'>
<div className="card col-6 mb-3  border border-light bg-dark">
<div className="card-body">
<a href=""  className="card-title text-danger">Body-matcher</a>
<p className="card-text text-light">With supporting text below as a natural </p>

</div>
</div>

<div className="card col-6 mb-3  border border-light bg-dark">
<div className="card-body">
    <a href=""  className="card-title text-danger">Body-matcher</a>
    <p className="card-text text-light">With supporting text below as a natural </p>

</div>
</div>


<div className="card col-6 mb-3  border border-light bg-dark">
<div className="card-body">
    <a href=""  className="card-title text-danger">Body-matcher</a>
    <p className="card-text text-light">With supporting text below as a natural </p>

</div>
</div>

<div className="card col-6 mb-3  border border-light bg-dark">
<div className="card-body">
    <a href=""  className="card-title text-danger">Body-matcher</a>
    <p className="card-text text-light">With supporting text below as a natural </p>

</div>
</div>

<div className="card col-6 mb-3  border border-light bg-dark">
<div className="card-body">
    <a href=""  className="card-title text-danger">Body-matcher</a>
    <p className="card-text text-light">With supporting text below as a natural </p>

</div>
</div>

<div className="card col-6 mb-3  border border-light bg-dark">
<div className="card-body">
    <a href=""  className="card-title text-danger">Body-matcher</a>
    <p className="card-text text-light">With supporting text below as a natural </p>

</div>
</div>


</div>


</div> */}