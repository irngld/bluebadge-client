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
            <form onSubmit={authenticate}>
            
            
                <div className="form-group">
                    <label>Email</label>
                    <input 
                    id='email'
                    aria-label='email'
                    className="form-control" 
                    placeholder="Enter email"
                    type='email'
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}

                />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    id='password'
                    aria-label='password'
                    className="form-control"
                    placeholder="Enter password"
                    type='password'
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                </div>

                
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Don't have an account? <a href="#">Register here</a>
                </p>
            </form>
        </div>
    )
}

export default Login;