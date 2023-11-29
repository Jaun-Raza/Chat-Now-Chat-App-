import React from 'react';
import styled from 'styled-components';

const Message = ({ username, text, uri, position }) => {
  return (
    position === "Me" ? <Wrapper isMe={position === 'Me'}>
      <div>
        <span>{username}</span>
        <p>{text}</p>
      </div>
      <img src={uri} alt="profile-img" />
    </Wrapper> : <Wrapper>
      <img src={uri} alt="profile-img" />
      <div style={{ backgroundColor: 'rgb(70 95 124)', color: 'white' }}>
        <span>{username}</span>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};

  img {
    border-radius: 3rem;
    width: 50px;
    height: 50px;
  }

  div {
    padding: 6px;
    border: none;
    border-radius: 4px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    word-wrap: break-word;
    box-shadow: 1px 4px 3px 1px #637589;

    span {
      font-size: 14px;
      border-bottom: 1px solid black;
      font-weight: bold;
    }

    p {
      margin: 0;
      height: 100%;
    }
  }
`;

export default Message;
