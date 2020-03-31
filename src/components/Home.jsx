import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './SearchBar';
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
  max-width: 90vw;
  overflow: auto;
  white-space: nowrap;
  height: 400px;
`;

const Home = () => {
  const [homes, setHomes] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const searchHome = (param) => {
    setSearchParam(param);
  }

  useEffect(() => {
      axios.get("/homes")
      .then(res => {
        if(searchParam){
          const result = res.data.filter(home => home.name === searchParam);
          setHomes(result)
        } 
        else {
          setHomes(res.data);
        }})
  }, [searchParam]);

  return (
    <StyledHome>
      <SearchBar searchHome={searchHome} />
      <StyledHomeHeader>Featured homes</StyledHomeHeader>
      <StyledHomeContainer>
        { homes.map(home => <HomeCards home={home} />)}
      </StyledHomeContainer>
    </StyledHome>
  )
}

export default Home;

