import React, { useState, useEffect,  } from "react";
import "./App.css";

import Header from "./Header/Header";

import Cards from "./Cards/Cards";
import CardPerson from "./CardPerson/CardPerson";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState([]);
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const logins = [];
  const urls = [];
  const arr = [];
  // console.log(searchValue,'pomenalos');
  useEffect(() => {
    fetch(`https://api.github.com/users`, {
      method: "GET",
      headers: {
        Authorization: "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",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      });
  }, [setCount]);

  // console.log(count);
  count !== 0 &&
    count.forEach((users) => {
      logins.push(users.login);
    });
    count!==0 && count.forEach((users)=>{
        urls.push(users.url)
       });

// console.log(urls);

//  const reposHand= useMemo(()=>{
//          urls.map((ind)=>{
//              fetch(ind,{
//      method:"GET",
//           headers:{
//             Authorization:""
//           }
          
//         }).then((res)=>res.json()).then(data=>{
//       arr.push(data)
//          // console.log(arr);
//          setRepos(arr)
//        })
//        })
// },[])
// console.log(reposHand);
 useEffect(()=>{
       
   
       
       
       urls.map((ind)=>{
             fetch(ind,{
     method:"GET",
          headers:{
            Authorization:""
          }
          
        }).then((res)=>res.json()).then(data=>{
      arr.push(data)
         // console.log(arr);
         setRepos(arr)
       })
       })
    
    
       },[count, setCount, setRepos]);
console.log(repos);

  return (
    <BrowserRouter>
      <div className="App">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className="content col-12 bg-dark">
          <Routes>
            <Route
              path="/"
              element={
                <Cards
                  count={count}
                  logins={logins}
                  searchValue={searchValue}
                  repos={repos}
                  setRepos={setRepos}
                />
              }
            />

            <Route path="count/:id" element={<CardPerson count={count} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// fetch(`https://api.github.com/users/`).then((res)=>res.json()).then(d=>{setRepos(d)})

//     function ff() {
// return new Promise(logins => setTimeout(logins, 500));
// }

// (async function() {
// for (let i = 0; i < logins.length; i++) {

// await ff();
// console.log('nahuy', logins[i]);

// }
// })();
