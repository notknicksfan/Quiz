import React from "react";

async function loginUser(credentials){
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type':'applications/json'
        },
        body: JSON.stringify(credentials)
    }
    )
    const data = await response.json();
    return data
}
export default function Login(props){
    const [username,setUsername] = React.useState()
    const [password,setPassword] = React.useState()

    const handleClick = async e =>{
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        props.setToken(token)
    }
    return(
        <div>
            <h1>Please log in</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit" onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    )
}