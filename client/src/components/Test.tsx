import React from 'react';

type TestProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

const Test = (props: TestProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn 
                    ? `Welcome ${props.name}! You got ${props.messageCount} unread messages.`
                    : "Welcome Guest"
                }
            </h2>
        </div>
    )
}

export default Test;
