import { useState } from "react";
import { verifyPassword } from "../Utils/utilities";
import background from "../../img/welcomeBackground2.jpg";
import { Container, Form, Button } from "react-bootstrap";

const Auth = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let authenticate = (e) => {
    e.preventDefault();

    if (verifyPassword(password)) {
      // verifies password meets criteria (upper, lower & num/spec)
      fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          email,
          password: password,
          firstName,
          lastName,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Password failed verification");
    }
  };

  return (
    <div
      className='reg-background d-flex'
      style={{ backgroundImage: `url(${background})` }}
        ><div className="w-50"></div>
        <div className="w-50 d-flex align-items-center">
        <Container className='register-form w-50 bg-light p-4 '>
            <Form className="reg-form" onSubmit={authenticate}>
            <h3 className="mb-4">Register</h3>

            <div className='form-group text-left'>
                <label className="my-2">First name</label>
                <input
                type='text'
                className='form-control'
                placeholder='First name'
                value={firstName}
                onChange={(event) => {
                    setFirstName(event.target.value);
                }}
                />
            </div>

            <div className='form-group mt-2'>
                <label className="my-2">Last name</label>
                <input
                type='text'
                className='form-control'
                placeholder='Last name'
                value={lastName}
                onChange={(event) => {
                    setLastName(event.target.value);
                }}
                />
            </div>

            <div className='form-group mt-2'>
                <label className="my-2">Email</label>
                <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                />
            </div>

            <div className='form-group mt-2'>
                <label className="my-2">Password</label>
                <input
                type='password'
                className='form-control'
                placeholder='Enter password'
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                />
            </div>

            <button type='submit' className='btn btn-dark btn-lg btn-block mt-4'>
                Register
            </button>
            <a href='/' type='button' className='btn btn-outline-dark btn-lg btn-block mx-2 mt-4'>
                Cancel
            </a>
            
            <p className='text-align-right mt-3'>
                Already registered <a href='/'>log in?</a>
            </p>
        
            </Form>

        
        </Container>
    </div>
      
    </div>
  );
};

export default Auth;
