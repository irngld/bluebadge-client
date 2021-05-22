import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { updateToken } from './UserToken';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let authenticate = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                email,
                password: password,
            })
        })
        .then(res => res.json())
        .then(json => {
            updateToken(json.token)
            console.log(json);
            history.push('/home')
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={authenticate}>
                <input 
                    id='email'
                    aria-label='email'
                    placeholder='name@tld.com'
                    type='text'
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                <input 
                    id='password'
                    aria-label='password'
                    placeholder='password'
                    type='password'
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <button>
                    Submit
                </button>
            </form>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    )
}

export default Login;