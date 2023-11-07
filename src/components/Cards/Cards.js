import React, { useState } from 'react'
import person from '../../assets/images/person.jpg'
import '../Cards/Cards.css'
import { useEffect } from 'react'

function Cards() {
    const [count, setCount]= useState([]);
    
    useEffect(()=>{
      
      fetch(`https://api.github.com/users`).then((res)=>res.json()).then(data=>{setCount(data)})
    },[]);
    // useEffect(()=>{
      
    //   fetch(`https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting`).then((res)=>res.json()).then(data=>{setCount(data)})
    // },[]);

   console.log(count);
    
   
  


   
  return (
    <>
{count.map((ind)=>((count.length!==0)?
      <div  key='ind' className='card col-4 bg-dark'>
      <div className='img col-3 bg-light'>
          <img  className='img'src={ind.avatar_url} alt="" />
          
          </div>
      <div className='cardBody col-8' >
          <span > <a className='text-danger' href="">{ind.login}</a>, 15 репозиториев</span>
          <p>hazvanie jrganizacii</p>
      </div>
  </div>
  :
  ''
))}
    
    
    
    </>
  )
}

export default Cards







 