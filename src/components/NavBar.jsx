import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div``;
const StyledNavBarContent = styled.div`
  color: #5a5a5a;
  display: flex;
  margin: 1.5rem;
  justify-content: space-around;
  flex-direction: row;
  font-size: 2rem;
`;
const StyledNavBarHome = styled.div`
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
const StyledNavBarProfile = styled.div`
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
const StyledNavBarSaved = styled.div`
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
const StyledNavBarExplore = styled.div`
  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

const NavBar = () => {
  return(
    <StyledNavBar>
      <StyledNavBarContent>
        <StyledNavBarExplore>
          <i className="mdi mdi-search-web" />
        </StyledNavBarExplore>
        <StyledNavBarSaved>
          <i className="mdi mdi-heart-outline" />
        </StyledNavBarSaved>
        <StyledNavBarHome>
          <i className="mdi mdi-home-outline" />
        </StyledNavBarHome>
        <StyledNavBarProfile>
          <i className="mdi mdi-account-outline" />
        </StyledNavBarProfile>
      </StyledNavBarContent>
    </StyledNavBar>
  )
}

export default NavBar;
