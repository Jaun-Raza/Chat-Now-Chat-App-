import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { app } from '../firebase'


const db = getFirestore(app)

const SendMsg = ({ userData }) => {

    const [msg, setMsg] = useState("");
    const divforScroll = useRef(null)

    const handleInput = (e) => {
        setMsg(e.target.value);
    }

    const sendMsg = async (e) => {
        e.preventDefault();
        
        setMsg("");

        if (msg !== "") {
            await addDoc(collection(db, "Messages"), {
                text: msg,
                username: userData.displayName,
                uid: userData.uid,
                uri: userData.photoURL,
                createdAt: serverTimestamp()
            })
        }else {
            alert("Type a message first...")
        }

        divforScroll.current.scrollIntoView({ behavior: "smooth"});
    }


    return (
        <Wrapper>
            <div ref={divforScroll}></div>
            <div className="sendMsg">
                <form onSubmit={sendMsg}>
                    <input type="text" onChange={handleInput} value={msg} placeholder='Type a message....' required />
                    <button type='submit'><i className="fa fa-send-o" style={{ fontSize: "33px" }}></i></button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.sendMsg {
    background-color: white;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    background-color: #33465c;
    color: white;

    input {
        width: 17rem;
        height: 2rem;
        outline: none;
        border-radius: 0.5rem;
        padding: 5px;
        font-size: 17px;
        font-family: monospace;
    }

    button {
        width: 4rem;
        height: 2.2rem;
        margin-left: 0.3rem;
        border: none;
        background-color: #33465c;
    }
}

`;

export default SendMsg