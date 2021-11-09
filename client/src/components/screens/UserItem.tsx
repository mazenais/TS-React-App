import React from "react";
import { Link } from "react-router-dom";
import './screens.css';

interface DataProps {
    item: {
        _id: number;
        name: string;
        age: number;
        url: string;
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
        <Link to={`/users/${props.item._id}`}>
           
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                    <h3>
                {props.item.name} 
            </h3>
                        <img src={props.item.image} alt="" />
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
    );
};

export default UserItem;
