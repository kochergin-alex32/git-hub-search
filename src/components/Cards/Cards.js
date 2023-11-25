import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../Cards/Cards.css'
import NotFound from '../NotFound/NotFound';


function Cards({count, logins, searchValue}) {
  // console.log(searchValue);
   const users = count.filter((obj)=>{
    if(obj.login.toLowerCase().includes(searchValue.toLowerCase())){
      return true
    }
    return false
   })

   console.log(users);
 
  return (
    <>
{users.length==0 && count.length!==0 ? <NotFound searchValue={searchValue}/> :

(users.map((id)=>((count.length!==0 )?   <Link to={`count/${id.login}`}  key='ind' className='text-decoration-none card col-sx-6 col-md-4 bg-dark'>
      <div className='img col-3 bg-light'>
          <img  className='img'src={id.avatar_url} alt="" />
          
          </div>
      <div className='cardBody col-8 ' >
          <span > <a className='text-danger' href="">{id.login}</a>, 15 репозиториев</span>
          <p >hazvanie jrganizacii</p>
      </div>
  </Link> : ''))
) 
}
    
    
    
    </>
  )
}

export default Cards




{/* <h1 className='text-danger'>not faund</h1>  */}
     


 