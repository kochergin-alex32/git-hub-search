import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import person from '../../assets/images/person.jpg'
import '../Cards/Cards.css'
// import { useEffect } from 'react'

function Cards({count, logins}) {
   
 
  return (
    <>
{count.map((id)=>((count.length!==0)?
      <Link to={`count/${id.login}`}  key='ind' className='text-decoration-none card col-sx-6 col-md-4 bg-dark'>
      <div className='img col-3 bg-light'>
          <img  className='img'src={id.avatar_url} alt="" />
          
          </div>
      <div className='cardBody col-8 ' >
          <span > <a className='text-danger' href="">{id.login}</a>, 15 репозиториев</span>
          <p >hazvanie jrganizacii</p>
      </div>
  </Link>
  :
  ''
))}
    
    
    
    </>
  )
}

export default Cards







 