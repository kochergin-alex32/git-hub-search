import React, { useState, useEffect } from 'react'
import './App.css'

import Header from "./Header/Header";

import Cards from "./Cards/Cards";
import CardPerson from "./CardPerson/CardPerson";
import NotFound from "./NotFound/NotFound";
import SearchCard from "./SearchCard/SearchCard";

import{BrowserRouter, Route, Routes}from 'react-router-dom'

function App() {
  const [count, setCount]= useState([]);
  const [data, setData] = useState(null)
  const logins = [];

  useEffect(()=>{
    
    fetch(`https://api.github.com/users`).then((res)=>res.json()).then(data=>{setCount(data)})
  },[]);
  
 count!==0 && count.forEach((users)=>{
   logins.push(users.login)
  });


     

    function ff() {
return new Promise(logins => setTimeout(logins, 500));
}

(async function() {
for (let i = 0; i < logins.length; i++) {
// console.log('before', logins[i]);
await ff();
console.log('nahuy', logins[i]);
   
}
})();
   

  

  return (
    <div className="App">
    
    <Header/>
    
      <div className='content col-12 bg-dark'>

        {/* <BrowserRouter>
          <Routes>
              <Route path='/' element={<Cards />}/>
              <Route path='person' element={<CardPerson/>}/>
              <Route path='search' element={<SearchCard/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter> */}


        <Cards count={count} logins={logins}/> 
        {/* <CardPerson/> */}
        {/* <NotFound/> */}
        {/* <SearchCard/> */}

       </div>
     </div>
  );
}

export default App;
