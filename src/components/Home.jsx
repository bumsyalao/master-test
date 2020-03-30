import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeCards from './HomeCards';

const StyledHome = styled.div``;
const StyledHomeHeader = styled.h3`
  color: #fff;
  margin-left: 3rem;
`;
const StyledHomeContainer = styled.div`
  color: #fff;
  margin-left: 3rem;
  float:left;
  max-width: 80vw;
  overflow: auto;
  white-space: nowrap;
  height: 400px;
`;

const Home =() => {
  const [homes, setHomes] = useState([]);

  // const getAllHomes = () => {

  // }
  useEffect(() => {
    window
      .fetch("/homes")
      .then(result => result.json())
      .then(data => setComments(data));
  }, []);
  return(
    <StyledHome>
      <StyledHomeHeader>Featured homes</StyledHomeHeader>
      <StyledHomeContainer>
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
      </StyledHomeContainer>
    </StyledHome>
  )
}

export default Home;

