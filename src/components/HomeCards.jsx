import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const StyledHomeCard = styled.div`
  display: inline-block;
  padding: 1.5rem;
  width: 296px;
  height: 272px;
  margin: 10px;
  background: #232323;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  border-radius: 24px;
`;
const LikedButton = styled.button`
  outline: none;
  font-size: 2rem;
  background-color: unset;
  border: none;
  float: right;
  cursor:pointer;
  padding:10px 12px 8px;
  display:inline-block;
  transition:.2s;
  color: ${props => props.liked ? 'red;' : '#aaa;'}
`;

const StyledHomeCardPrice = styled.h3``;
const StyledHomeCardHeading = styled.h4`
  text-overflow: ellipsis;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
`;
const StyledHomeCardlocation = styled.h5``;

const HomeCards = ({ home }) => {

  const [mylikedHomes, setMyLikedHomes] = useState([]);
  const [liked, setLiked] = useState(false);

  const onLike = () => {
    axios.post('/users', {
      likedHomes: home
    }).then(res => {
      setMyLikedHomes(res.data.likedHomes)
    });
    if (mylikedHomes !== undefined) {
      mylikedHomes.id === home.id ? setLiked(true) : setLiked(false);
    }
    else { setLiked(false) }
  }


  return (
    <StyledHomeCard>
      <LikedButton onClick={onLike} liked={liked}> <i className="mdi mdi-heart" /> </LikedButton>
      <StyledHomeCardPrice>{home.price}</StyledHomeCardPrice>
      <StyledHomeCardHeading>{home.name}</StyledHomeCardHeading>
      <StyledHomeCardlocation>{home.location}</StyledHomeCardlocation>
    </StyledHomeCard>
  )
}

export default HomeCards;
