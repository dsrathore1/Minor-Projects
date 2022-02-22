import React, { useState } from 'react'
import "./Register.scss";


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <>
            <div className="app__container">
                <h1>Register Page</h1>
                <form onSubmit={registerUser} className='app__form' method="post">
                    <input type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' required />
                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                    <button type="submit">Register</button>
                </form>
                <a href='http://localhost:3000/login'>Already Have an account?</a>
            </div>
        </>
    )
}

export default Register