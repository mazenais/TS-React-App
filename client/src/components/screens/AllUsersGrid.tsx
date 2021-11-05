import axios, { Method } from 'axios';
import React, { useState, useEffect } from 'react'
import UserItem from './UserItem';

interface user {
   
        id: number,
        name: string, 
        age: number,
        url: string,

    } 
type users = user[]

interface config {
        method: Method,
        headers: any

    }



const AllUsersGrid = (props: any) => {
    const [users, setUsers]= useState<users | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        const fetchItems = async () => {
            

            const token = localStorage.getItem('token')
            const config: config = {
                method : 'get', 
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const result = await axios('http://localhost:5000/api/users', config);

            console.log(result.data);
            setUsers(result.data);
            setIsLoading(false);
        };
        fetchItems();
    }, [])
    
    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <section className="grid">
            {users && users.map((item) => (
                <UserItem key={item.id} item={item}></UserItem>
            ))}
        </section>
    );
}

export default AllUsersGrid
