import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import styled from 'styled-components';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { app } from './firebase.js'

const auth = getAuth(app);

const App = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (data) => {
            setUser(data);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <Wrapper>
            {
                user !== null ? <ChatRoom userData={user} /> : <Home />
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 0;
    padding: 0;
`;

export default App