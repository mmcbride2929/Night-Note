import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const current = new Date();

  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  return (
    <HeaderContainer>
      <h1>How Did Today Go?</h1>
      <h5>{date}</h5>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 550px;
  margin: 0 auto;
  color: whitesmoke;
  text-align: center;
  padding: 50px;
  align-items: center;

  > h1 {
    font-size: 3rem;
    font-family: 'Francois One', sans-serif;
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 1px;
  }

  > h5 {
    margin-top: 10px;
    font-size: 1rem;
    color: whitesmoke;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
