import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Home from './components/Home';


const StyledApp = styled.div`
  background-color: #1a1a1a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {

  return (
    <StyledApp id="app">
      <NavBar />
      <SearchBar />
      <Home />
    </StyledApp>
  );
};

export default App;
