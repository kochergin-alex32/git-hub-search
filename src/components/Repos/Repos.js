import React from 'react'
import { useState, useEffect, memo } from 'react'

import './Repos.css'

const Repos = memo(function ({data, isActive}) {
  const {login} = data
  const [repos, setRepos] = useState([]);
  // console.log(isActive);
  useEffect(()=>{
    
    fetch(`https://api.github.com/users/${login}/repos`).then((r)=>r.json()).then(d=>{setRepos(d)})
    
  },[data]);
  
  const filteredRepos = repos.slice(0,6);
   
  
return (
  <>


{isActive !== false ?(repos.map((id)=>((repos.length !== 0) ? <div className="card col-6 mb-2 border border-light bg-dark overflow-hidden">
  <div className="card-body">
      <a href={`https://github.com/${id.full_name}`} className="card-title text-danger">{id.name}</a>
      <p className="card-text text-light overflow-hidden">{id.description}</p>
  
  </div>
  </div> : <h1 className="card-text text-light"> pusto </h1>))):(
filteredRepos.map((id)=>((repos.length !== 0) ? <div className="card col-6 mb-2 border border-light bg-dark overflow-hidden">
<div className="card-body">
    <a href={`https://github.com/${id.full_name}`} className="card-title text-danger">{id.name}</a>
    <p className="card-text text-light overflow-hidden">{id.description}</p>

</div>
</div> : <h1 className="card-text text-light"> pusto </h1>))
)}

  </>
 
)
})

export default Repos


// n.map((id)=>((repos.length !== 0) ? <div className="card col-6 mb-2 border border-light bg-dark overflow-hidden">
//     <div className="card-body">
//         <a href={`https://github.com/${id.full_name}`} className="card-title text-danger">{id.name}</a>
//         <p className="card-text text-light overflow-hidden">{id.description}</p>
    
//     </div>
//     </div> : <h1 className="card-text text-light"> pusto </h1>))