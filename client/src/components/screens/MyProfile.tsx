import React from 'react'

interface Props {
    firstName: string;
    lastName: string;
    age?: number;
}

const MyProfile = (props: Props) => {
    return (
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            {props.age && <p>{props.age}</p>}
        </div>
    )
}

export default MyProfile
