import React from 'react';
import styled from 'styled-components';

const Header = ({ date, time }) => {
  return (
    <HeaderContainer>
      <h1>How Did Today Go?</h1>
      <h5>{date}</h5>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: whitesmoke;
  margin: 120px 0px;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 70px 0px;
  }
  @media (max-width: 500px) {
    margin: 40px 0px;
  }

  > h1 {
    font-size: 3rem;
    font-family: 'Francois One', sans-serif;
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.3rem;
    }
  }

  > h5 {
    font-family: 'Lato', sans-serif;
    margin-top: 10px;
    font-size: 1rem;
    color: whitesmoke;
    font-weight: 600;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;
