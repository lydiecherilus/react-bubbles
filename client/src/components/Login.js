import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components"

export default function Login(props) {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: ""
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <p className="bubble-access">Please login to access our bubble page</p>
      </div>
      <div>
        <Form onSubmit={handleOnSubmit}>
          <Input
            id="username"
            type="text"
            name="username"
            label="username"
            placeholder="username"
            onChange={handleChange}
            value={credentials.username}
          ></Input>

          <Input
            required
            id="password"
            type="password"
            name="password"
            label="Password"
            placeholder="password"
            onChange={handleChange}
            value={credentials.password}
          ></Input>

          <Button
            className="button">Log in</Button>
          <Button onClick={() => { localStorage.removeItem("token"); }}>Logout</Button>
        </Form>
      </div>
    </div>
  );
};

const Form = styled.form`
background-color: beige;
margin: 0;
padding: 15px;
box-shadow: 15px 15px 10px #a9a9a9;
`;

const Input = styled.input`
text-align: center;
width: auto;
background: white;
border-radius: 25px;
margin: 5px;
`;

const Button = styled.button`
text-align: center;
width: 150px;
color: red;
background: black;
border-radius: 25px;
margin: auto;
`;