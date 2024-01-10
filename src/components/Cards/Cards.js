import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import '../Cards/Cards.css'
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';


function Cards({count, repos, searchValue, users1}) {

  
  const users = users1.filter((obj)=>{
    if(obj.login.toLowerCase().includes(searchValue.toLowerCase())){
      return true
    }
    return false
  })
  
  
  
  

  
  return (



 <>
     {users1.length==0  ? <Loading/>:
    
    (users.length==0?<NotFound searchValue={searchValue}/>: 
    (users.map((id)=>(  <Link to={`count/${id.login}`}  key='ind' className='text-decoration-none card col-sx-6 col-md-4 bg-dark overflow-hidden'>
          <div className='img col-3 bg-light'>
              <img  className='img'src={id.avatar_url} alt="" />
              
              </div>
              <div className=' text-light  col-8 mt-2'>
              <div  >
              <span className='d'> <a className='text-danger' href="">{id.login}</a>,
               {id.public_repos} репозиториев</span>
              <p className='company' >{id.company}</p>
          </div>
              </div>
          
      </Link>))
    )
      )
    
    
   
    }
        
        
        
        </>

  )
}

export default Cards





     


{/* <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}


//     <>
// {users.length==0 && count.length!==0 ? <NotFound searchValue={searchValue}/> :

// (users.map((id)=>((count.length!==0 )?   <Link to={`count/${id.login}`}  key='id' className='text-decoration-none card col-sx-6 col-md-4 bg-dark'>
//       <div className='img col-3 bg-light'>
//           <img  className='img'src={id.avatar_url} alt="" />
          
//           </div>
//       <div className='cardBody col-8 ' >
//           <span > <a className='text-danger' href="">{id.login}</a>, 15 репозиториев</span>
//           <p >hazvanie jrganizacii</p>
//       </div>
//   </Link> : ''))
// ) 
// }
    
    
    
//     </>


//нужная версия
 // <>
    // {users.length==0 && count.length!==0 ? <NotFound searchValue={searchValue}/> :
    
    // (users.map((id)=>((count.length!==0 && users.length >10)?   <Link to={`count/${id.login}`}  key='ind' className='text-decoration-none card col-sx-6 col-md-4 bg-dark overflow-hidden'>
    //       <div className='img col-3 bg-light'>
    //           <img  className='img'src={id.avatar_url} alt="" />
              
    //           </div>
    //           <div className=' text-light  col-8 mt-2'>
    //           <div  >
    //           <span className='d'> <a className='text-danger' href="">{id.login}</a>, {id.public_repos} репозиториев</span>
    //           <p className='company' >{id.company}</p>
    //       </div>
    //           </div>
          
    //   </Link> : ''))
    // ) 
    // }
        
        
        
    //     </>


