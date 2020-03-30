import React from 'react';
import styled from 'styled-components';


const StyledSearchBar = styled.div``;
const StyledSearchBarContent = styled.div`
`;
const Input = styled.input`
  background-color: #1a1a1a;
  width: 50vw;
  max-width: 60vw;
  color: #fff;
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 2rem;
  outline: none;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <Input type="text" placeholder="Search.." />
      </StyledSearchBarContent>
    </StyledSearchBar>
  )
}

export default SearchBar;
