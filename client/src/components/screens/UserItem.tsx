import React from "react";
import { Link } from "react-router-dom";
import "./screens.css";
import { Container } from 'react-bootstrap';
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

const UserItem = (props: any) => {
  console.log(props.item);
  return (
    <Container className="fluid"> 
    <Link to={`/users/${props.item._id}`}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            {/* <h3>{props.item.name}</h3> */}
            <img src={props.item.photo} alt="" height="100%" width="100%" className="img-fluid"/>
          </div>
          <div className="card-back">
            <h1>{props.item.sex}</h1>

            <ul>
              <li>
                <strong>Name:</strong> {props.item.name}
              </li>
              <li>
                <strong>Age:</strong> {props.item.age}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  </Container>
  );
};

export default UserItem;
