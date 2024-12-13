
import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const LoginForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #6b4b9a;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #8493cd;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 14px;
`;

function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });



  const handleSubmit = () => {

    if (!data.email || !data.password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      alert('Logged in successfully');
    }
  };

  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            // name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e)=>(setData({...data,email:e.target.value}))}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e)=>(setData({...data,password:e.target.value}))}
          />
          <Button type="submit">Login</Button>
        </form>
      </LoginForm>
    </Container>
  );
}

export default Login;
