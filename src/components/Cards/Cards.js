// import React, { useState } from 'react'
import person from '../../assets/images/person.jpg'
import '../Cards/Cards.css'
// import { useEffect } from 'react'

function Cards({count, logins}) {
   
  //   const [count, setCount]= useState([]);
  //   const [data, setData] = useState(null)
  //   const logins = [];

  //   useEffect(()=>{
      
  //     fetch(`https://api.github.com/users`).then((res)=>res.json()).then(data=>{setCount(data)})
  //   },[]);
    
  //  count!==0 && count.forEach((users)=>{
  //    logins.push(users.login)
  //   });



  
//     function get() {
  
//  fetch(`https://api.github.com/users/${logins[i]}/repos`)
//               .then((res) => res.json())
//               .then((d) => {
//                 setData(d);
//               })
            
          
//     useEffect(() => {
//            let f = throttle(get, 1000)
//           }
// ,[])



    // console.log(logins);

  //  console.log(count);



// function App2() {
//   const [data, setData] = useState(null);
//   const [count, setCount] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.github.com/users`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
//   console.log(data);
//  
//   useEffect(() => {
//     data.forEach((user) => {
//       throttle(get, 500);
//     });

//     function get() {
//       fetch(`https://api.github.com/users/${user.id}/repos`)
//         .then((res) => res.json())
//         .then((d) => {
//           setCount(d);
//         });
//     }

//     data != null && data.forEach((user) => {});
//   }, [data]);

//   return (
//     <>
//       {data && <h1>asdasd</h1>}

//       <div>App2</div>
//     </>
//   );
// }
   
  return (
    <>
{count.map((id)=>((count.length!==0)?
      <div  key='ind' className='card col-sx-6 col-md-4 bg-dark'>
      <div className='img col-3 bg-light'>
          <img  className='img'src={id.avatar_url} alt="" />
          
          </div>
      <div className='cardBody col-8' >
          <span > <a className='text-danger' href="">{id.login}</a>, 15 репозиториев</span>
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







 