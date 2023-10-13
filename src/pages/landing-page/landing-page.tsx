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

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  margin-right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Description = styled.p`
  margin-top: 40px;
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
        <h1>Welcome to My Website</h1>
        <ButtonGroup>
          <Button>Purchases</Button>
          <Button>Upload new file</Button>
        </ButtonGroup>
        <Description>
          Ovde ke ide nekoj opis taka edna podolga recenica za stranava za sto sluzi cisto koga ke otvori da procita.
        </Description>
      </MainPart>
           </div>
        </>
    );
};