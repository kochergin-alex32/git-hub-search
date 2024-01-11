import React, { useEffect, useState } from 'react';
import "./App.css";

import Header from "./Header/Header";
// import StartSearch from "./StartSearch/StartSearch";
import Cards from "./Cards/Cards";
import CardPerson from "./CardPerson/CardPerson";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");
//   console.log(users);

  useEffect(() => {
  
    fetch("https://api.github.com/users", {
      method: "GET",
      headers: {
        Authorization: "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",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      const dataUsers = data.map((user) => {
        return user.url;
      });
      return dataUsers;
    })
    .then((dataUsers) => {
      
      return Promise.all(
        dataUsers.map(async (url) => {
          return await fetch(url)
          .then((res) => res.json())
         
              
              .then((data) => data);
             
          })
        );
      })
      
      .then((data) => setUsers(data))
      .catch((err)=>alert("ошибка запроса на сервер, попобуйте позднее"));
      
      // console.log(users);

  }, []);
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
                users1={users}
                setUsers ={setUsers}
                  searchValue={searchValue}
                />
              }
            />

            <Route path="count/:id" element={<CardPerson users={users} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App