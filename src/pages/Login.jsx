import React from 'react';
import styled from 'styled-components';
import LoginNav from '../components/LoginNav';
import LoginSection from '../components/LoginSection';

const Login = props => {
    return (
        <Container>
            <LoginNav />
            <LoginSection />
        </Container>
    );
};

export default Login;

const Container = styled.div`
    padding: 0px;
`;
