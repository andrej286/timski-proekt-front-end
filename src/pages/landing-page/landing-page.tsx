import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #000000;
  position: relative;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainPart = styled.div`
  height: 70vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 70%;
  max-height: 70%;
  margin-bottom: 20px;
`;

const LinkGroup = styled.div`
  margin-top: 20px;
`;

const Description = styled.p`
  margin-top: 40px;
`;

const Link = styled.a`
  margin-right: 20px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  background-color: #007bff;

  &:hover {
    background: #1b9bff;
  }
`;


export const LandingPage = () => {
    console.log("this test");

    return (
        <>
            <div>
                <VideoContainer>
                    <Video src="video.webm" autoPlay muted loop />
                </VideoContainer>
                <MainPart>
                  <Logo src="free-bg.png" alt="LOGO TO HERE" />
                  <h1>STORE ON ONE PLACE YOUR PURCHASES AND ADDITIONS</h1>
                  <LinkGroup>
                    <Link href="/log-in">Login</Link>
                    <Link href="/sign-up">Sign up</Link>
                  </LinkGroup>
                  <Description>
                   Upload your purchases and additons and have a full control of them
                  </Description>
                </MainPart>
            </div>
        </>
    );
};