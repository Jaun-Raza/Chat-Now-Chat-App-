import React from 'react'
import styled from 'styled-components';
import { signOut, getAuth } from "firebase/auth";
import { app } from '../firebase.js'

const auth = getAuth(app);

const logoutHandler = () => signOut(auth)

const Header = () => {
  return (
    <Wrapper>
      <div className="nav">
        <h3><i className="fa fa-users" aria-hidden="true"></i> Chat Now</h3>
        <div className="dropdown">
          <button className="dropbtn"><img src="/ellipsis.png" width={'30px'} alt="" />
          </button>
          <div className="dropdown-content">
            <button onClick={logoutHandler}>Logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid white;
   padding: 8px;
    background-color: #33465c;
    color: white;

  h3 {
    font-family: system-ui;
    font-size: 21px;
    cursor: pointer;
  }

  .dropdown {
    float: left;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin-left: 1.5rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content button {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content button:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

export default Header