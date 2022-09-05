import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "../components/SingleUser"
export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (users) => {
    const response = await axios.get("https://randomuser.me/api/?results=30");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return <div className="user-list">
      <ul>
          {users.map((user,id)=>(
            <li><SingleUser user={user} key={id}></SingleUser></li>
          ))}
      </ul>
  </div>;
}
