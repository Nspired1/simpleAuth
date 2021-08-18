import React, { useState } from 'react'

function Login (){
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

        return (
            <div>
            <h1>Login</h1>
                <form 
                    onSubmit={e => {e.preventDefault();}}
                >
                    <label htmlFor="email">
                        Email
                        <input 
                            type="text" 
                            id="email"
                            placeholder="Enter email" 
                            value={registerEmail}
                            onChange={e => setRegisterEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="username">
                        Username
                        <input 
                            type="text"
                            id="username" 
                            placeholder="Enter username"
                            value={registerUsername}
                            onChange={e => setRegisterUsername(e.target.value)}
                            />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input 
                            type="password" 
                            id="password"
                            placeholder="Enter password" 
                            value={registerPassword}
                            onChange={e => setRegisterPassword(e.target.value)}
                            />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
}

export default Login;