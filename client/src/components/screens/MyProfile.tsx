import React, { useState, useEffect } from "react";
import axios, { Method } from "axios";
import "antd/dist/antd.css";
import { Avatar, Modal, Button } from "antd";

interface Props {
  name: string;
  lastName: string;
  age?: number;
}
interface item {
  _id: number;
  name: string;
  age: number;
  url: string;
  photo: string;
}
interface config {
  method: Method;
  headers: any;
  url: string,
}

const MyProfile = (props: any) => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   //the state of profile pic
//   
//   }

  // console.log(props.items);
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem("token");
      const config: config = {
        method: "get",
        url: "http://localhost:5000/api/users/6182c993f2724e1c0747f2e1",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios(config);

      console.log(result);
      setItem(result.data);
      setIsLoading(false);
     
    };
    fetchItems();
  }, []);
 
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <Avatar size={85} icon="UserAddOutlined" />
      {/* <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </> */}
      <p>{props.lastName}</p>
      <p>Name: {item && props.name}</p>
      {props.age && <p>{props.age}</p>}
    </div>
  );
};

export default MyProfile;
