import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';
import persona from '../../assets/images/persona.jpg'
import '../CardPerson/CardPerson.css'
import Repos from '../Repos/Repos';
function CardPerson(count) {
const [data, setData] = useState(null)

const users = count.count;
console.log(123 + users);
const  {id} = useParams();
// console.log(id); 
const user = users.find((item => item.login==id));
console.log(user);
useEffect(()=>{
    
    fetch(`https://api.github.com/users/${id}`).then((res)=>res.json()).then(data=>{setData(data)});

    // fetch(`https://api.github.com/users/${id}/repos`).then((r)=>r.json()).then(d=>{setRepos(d)})
    
  },[]);

console.log(data)
//  console.log(repos);  
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
                <a className='text-danger' >Все репозитории</a>
          </div>

    <div className='repos-title'>
        <Repos data={data} />
 
    </div>

    
  </div >
  )
}

export default CardPerson


















{/* <div className="card col-6 mb-2  border border-light bg-dark">
<div className="card-body">
<a href=""  className="card-title text-danger">{repos[0].name}</a>
<p className="card-text text-light">With supporting text below as a natural </p>

</div>
    </div>

    <div className="card col-6 mb-2 border border-light bg-dark">
    <div className="card-body">
        <a href=""  className="card-title text-danger">{repos[1].name}</a>
        <p className="card-text text-light">With supporting text below as a natural </p>
    
    </div>
    </div>


    <div className="card col-6 mb-2  border border-light bg-dark">
    <div className="card-body">
        <a href=""  className="card-title text-danger">{repos[2].name}</a>
        <p className="card-text text-light">With supporting text below as a natural </p>
    
    </div>
    </div>

    <div className="card col-6 mb-2  border border-light bg-dark">
    <div className="card-body">
        <a href=""  className="card-title text-danger">{repos[3].name}</a>
        <p className="card-text text-light">With supporting text below as a natural </p>
    
    </div>
    </div>

    <div className="card col-6 mb-2 border border-light bg-dark">
    <div className="card-body">
        <a href=""  className="card-title text-danger">Body-matcher</a>
        <p className="card-text text-light">With supporting text below as a natural </p>
    
    </div>
    </div>

    <div className="card col-6 mb-2 border border-light bg-dark">
    <div className="card-body">
        <a href=""  className="card-title text-danger">Body-matcher</a>
        <p className="card-text text-light">With supporting text below as a natural </p>
    
    </div>
    </div> */}

