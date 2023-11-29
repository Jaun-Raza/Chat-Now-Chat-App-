import React, { useEffect, useRef, useState } from 'react'
import { app } from '../firebase.js'
import styled from 'styled-components';
import Message from './Message.jsx';
import Header from './Header.jsx';
import { getFirestore, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import SendMsg from './SendMsg.jsx';

const db = getFirestore(app)

const ChatRoom = ({ userData }) => {

    const [messages, setMessages] = useState([]);
    const divforScroll = useRef(null)
    const sort = query(collection(db, "Messages"), orderBy("createdAt", "asc"));

    useEffect(() => {
        const unsubscribe = onSnapshot(sort, (snap) => {
            setMessages(
                snap.docs.map(item => {
                    return item.data()
                })
            );
        })
        
        return () => {
            unsubscribe()
        }
    }, [])
    
    useEffect (() => {
        divforScroll.current.scrollIntoView({ behavior: "smooth"});
    }, [messages])

    return (
        <Wrapper>
            <Header />
            <div className="msgs">
                {
                    messages !== null ? messages.map((currElem, index) => {
                        return <Message key={index} {...currElem} position={currElem.uid === userData.uid ? "Me" : "Other"} />
                    }) : null
                }
            </div>
            <SendMsg userData={userData} />
            <div ref={divforScroll}></div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .msgs {
        margin: 6px;
        margin-top: 7rem;
        margin-bottom: 7rem;
    }
`;

export default ChatRoom