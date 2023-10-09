import { useState } from "react";

const Users = ({name, location}) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    return(
        <div>
            <p>{count}</p>
            <p>{count1}</p>
            <h1>Name  {name}</h1>
            <h2>Location - {location}</h2>
        </div>
    )
}

export default Users;