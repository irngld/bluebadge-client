import  { useState } from 'react';
import { verifyPassword } from '../Utils/utilities';


const Auth = () => {
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    let authenticate = (e) => {
        e.preventDefault();

        if (verifyPassword(password)) {
            fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email,
                    password: password, // verify that password meets criteria
                    firstName,
                    lastName
                })
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.log(err);
            })
        }
        else {
            console.log('Password failed verification')
        }
    }
    
    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={authenticate}>
                <input 
                    id='firstName'
                    aria-label='firstName'
                    placeholder='First Name'
                    type='text'
                    onChange={(event) => { setFirstName(event.target.value) }}
                />
                   <input 
                    id='lastName'
                    aria-label='lastName'
                    placeholder='Last Name'
                    type='text'
                    onChange={(event) => { setLastName(event.target.value) }}
                />
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
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    )
}

export default Auth;