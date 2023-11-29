import React from 'react'
import { useState, useEffect,memo,useCallback} from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';

import '../CardPerson/CardPerson.css'
import Repos from '../Repos/Repos';
const CardPerson = memo(function (count) {

    const [data, setData] = useState(null);
    const [isActive, setisActive] = useState(false);
    
    const users = count.count;
    const  {id} = useParams();
    const user = users.find((item => item.login==id));
    
    useEffect(()=>{
        fetch(`https://api.github.com/users/${id}`).then((res)=>res.json()).then(data=>{setData(data)});
      },[]);
      console.log(data);
    //  console.log(data.public_repos);
    const isActiveHandler = useCallback(()=>{
    
       setisActive((prevActive) => !prevActive)
      
    },[isActive]);
    
      return (
      users.length > 0 && id && data &&
        < div className='container  '>
        <div className='card-person col-9 bg-dark'>
            <div className='img1 col-3 bg-light'>
                <img  className='img1'src={user.avatar_url
    } alt="" />
                
                </div>
            <div className='cardBody col-8' >
                {data.name ? <h1>{data.name},&nbsp;
                         <a className='text-danger text-decoration-none' >{data.login}</a>
                         </h1>:
                    <h1>имя отсутствует,&nbsp;
                         <a className='text-danger text-decoration-none' >{data.login}</a>
                         </h1> 
                         }
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
                  
                 {data.blog ?  <li>
                    <div>
                        < p className='text-danger '>{data.blog}</p>
                    </div>
                </li> 
                :
                   
                <li className='blog'>
                    <div>
                        <p className='text-light blog' >{data.blog}</p>
                    </div>
                </li>
                 }  
              </ul>
             
            </div>
        </div>
        <div className='repos col-12'>
                    <h1 className='text-light'> РЕПОЗИТОРИИ</h1>
                    <div className='all-rep'>
                        {/* меняю кликом isActive с true на false */}
                         {/* <a   onClick={() => setisActive((prevActive) => !prevActive)} className={isActive ? 'active text-danger' : 'text-danger'}  >{isActive==false?'Все репозитории': 'Свернуть   ' }</a> */}
                         <a   onClick={() => isActiveHandler()} className={isActive ? 'active text-danger' : 'text-danger'}  >{isActive==false?'Все репозитории': 'Свернуть   ' }</a>
                    </div>
                   
                   
              </div>
    
        <div className='repos-title'>
            <Repos data={data}  isActive={isActive}/>
     
        </div>
        {isActive && data.public_repos>6 && <div className='to-up'>
    
            <a href="#"   className='text-danger text-decoration-none'> &#8593; наверх</a>
                </div>
     }
        
      </div >
      )
    })

export default CardPerson


// import React from 'react';
// import './BtnScrollUp.scss'

// function BtnScrollUp() {

// const handlerScrollUp = () => {
// if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
// window.scrollBy(0, -50);
// setTimeout(handlerScrollUp, 10);
// }
// }

// return (
// <div className={'btn-scroll-up'} onClick={handlerScrollUp}>▲</div>
// );
// }

// export default BtnScrollUp;




{/* меняю кликом isActive с true на false */}
 {/* <button onClick={() => setisActive((prevActive) => !prevActive)} className={isActive ? 'likeBtn_active' : 'likeBtn'}>push</button> */}












