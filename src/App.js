/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [users, setUsers] = useState([]);
  const request1 = "https://reqres.in/api/users";

  const fetchUserPage1 = () => {
    axios.get(request1).then((response) => {
      const { data } = response.data;
      console.log(data);
      setUsers(users,[...data]);
    });
  };

  fetchUserPage1();

  return (
    <div className="App">
      <div className="row">
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              firstname={user.first_name}
              lastname={user.last_name}
              source={user.}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
