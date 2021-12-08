import React, { useState, useEffect } from "react";
import axios, { Method } from "axios";
import "antd/dist/antd.css";
import { Avatar, Modal, Button } from "antd";

interface DataProps {
  item: {
    _id: number;
    name: string;
    age: number;
    url: string;
    photo: string;
  };
  user: {
    _id: number;
    name: string;
    age: number;
    url: string;
  };
}
interface config {
  method: Method;
  headers: any;
  url: string,
}

const MyProfile = (props: any) => {
  console.log(props.item);

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem("token");
      const config: config = {
        method: "get",
        url: "http://localhost:5000/api/profile/61968d6f7866fd0adcc266aa",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios(config);

      console.log(result.data);
      setItem(result.data);
      setIsLoading(false);
     
    };
    fetchItems();
  }, []);
 
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (

    
    <div className="container">
      <Avatar size={85} icon="UserAddOutlined">
      {/* <img src={props.item.photo} alt="" height="100%" width="100%" className="img-fluid"/> */}
      </Avatar>
      
      <p>{props.lastName}</p>
      <p>Name: {props.name}</p>
    </div>
  );
};

export default MyProfile;
