import React from 'react';
import styled from 'styled-components';
import { GoogleAuthProvider, signInWithRedirect, getAuth } from 'firebase/auth';
import { app } from '../firebase.js'

const auth = getAuth(app);

const googleSigninHandler = () => {
  const provider = new GoogleAuthProvider();

  signInWithRedirect(auth, provider);
}

const Home = () => {
  return (
    <Wrapper>
      <h1>Chat Now</h1>
      <button onClick={googleSigninHandler}><i className="fa fa-google-plus"></i> Google</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6rem auto;
  gap: 4rem;  

  h1 {
    font-family: monospace;
    font-size: 3rem;
  } 

  button {
    width: 8rem;
    height: 2.2rem;
    background: red;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }

`;

export default Home