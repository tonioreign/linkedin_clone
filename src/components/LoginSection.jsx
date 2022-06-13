import React from 'react';
import styled from 'styled-components';

const LoginSection = () => {
    return (
        <Container>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src="./images/login-hero.svg" alt="hero" />
            </Hero>
            <Form>
                <Google>
                    <img src="./images/google.svg" alt="google" />
                    Sign in with Google
                </Google>
            </Form>
        </Container>
    );
};

export default LoginSection;

const Container = styled.div`
    align-content: start;
    display: flex;
    min-height: 700px;
    padding-top: 40px;
    padding-bottom: 138px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 769px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img {
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 769px) {
        margin-top: 20px;
    }
`;
const Google = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
        inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    font-size: 20px;
    transition-duration: 167ms;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    &:hover {
        background: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;
