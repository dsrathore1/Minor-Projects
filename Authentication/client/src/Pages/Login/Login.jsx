import React, { useState } from 'react'
import "./Login.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
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
                <h1>Login Page</h1>
                <form onSubmit={registerUser} className='app__form' method="post">
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' required />
                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                    <button type="submit">Login</button>
                </form>
                <a href='http://localhost:3000/register'>Don't Have an account?</a>
            </div>
        </>
    )
}

export default Login;