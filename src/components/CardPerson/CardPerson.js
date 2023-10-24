import React from 'react'
import persona from '../../assets/images/persona.jpg'
import '../CardPerson/CardPerson.css'
function CardPerson() {
  return (
    <div className='container  '>
    <div className='card-person col-9 bg-dark'>
        <div className='img1 col-3 bg-light'>
            <img  className='img1'src={persona} alt="" />
            
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

    
  </div>
  )
}

export default CardPerson