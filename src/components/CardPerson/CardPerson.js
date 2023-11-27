import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';

import '../CardPerson/CardPerson.css'
import Repos from '../Repos/Repos';
function CardPerson(count) {

const [data, setData] = useState(null);
const [isActive, setisActive] = useState(false);
const [up, setUp]= useState(0)
const users = count.count;
const  {id} = useParams();
const user = users.find((item => item.login==id));

useEffect(()=>{
    fetch(`https://api.github.com/users/${id}`).then((res)=>res.json()).then(data=>{setData(data)});
  },[]);

console.log(up
    );
// console.log(isActive);
  return (
  users.length > 0 && id && data &&
    < div className='container  '>
    <div className='card-person col-9 bg-dark'>
        <div className='img1 col-3 bg-light'>
            <img  className='img1'src={user.avatar_url
} alt="" />
            
            </div>
        <div className='cardBody col-8' >
                <h1>{data.name},&nbsp;
                     <a className='text-danger text-decoration-none' href="">{data.login}</a>
                     </h1>
          <ul >
            <li>
                <div>
                    <p className='text-danger' >{data.followers}</p> 
                    &nbsp;
                     <span> подписчикa</span>
              </div>
              </li>
            <li>
                <div>
                    <p className='text-danger' >{data.following
}</p> 
                    &nbsp;
                     <span> подписок</span>
                 </div>
            </li>
                  
            <li>
                <div>
                    <p className='text-danger' >{data.blog}</p>
                </div>
            </li>
          </ul>
         
        </div>
    </div>
    <div className='repos col-12'>
                <h1 className='text-light'> РЕПОЗИТОРИИ</h1>
                <div className='all-rep'>
                    {/* меняю кликом isActive с true на false */}
                     <a   onClick={() => setisActive((prevActive) => !prevActive)} className={isActive ? 'active text-danger' : 'text-danger'}  >{isActive==false?'Все репозитории': 'Свернуть   ' }</a>
                </div>
               
               
          </div>

    <div className='repos-title'>
        <Repos data={data}  isActive={isActive}/>
 
    </div>
    {/* <div className='to-up'>

    <p onClick={setUp} className='text-danger '> &#8593; наверх</p>
    </div> */}
    
  </div >
  )
}

export default CardPerson




{/* меняю кликом isActive с true на false */}
 {/* <button onClick={() => setisActive((prevActive) => !prevActive)} className={isActive ? 'likeBtn_active' : 'likeBtn'}>push</button> */}












