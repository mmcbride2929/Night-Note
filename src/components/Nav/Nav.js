import React from 'react';
import styled from 'styled-components';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavContainer>
      <NavLeft>
        <TitleLink to="/">
          <h3 className="nav-title">Night-Note</h3>
        </TitleLink>
        <NightsStayIcon />
      </NavLeft>

      <NavRight>
        <StyledLink to="/notes">Notes</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavRight>
    </NavContainer>
  );
};

export default Nav;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: whitesmoke;
  padding: 6px 12px;
  font-weight: 600;
  padding-top: 2px;

  :hover {
    cursor: pointer;
    color: whitesmoke;
    border-radius: 5px;
    background-color: #506680;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px, rgba(0, 0, 0, 0) 0px 2px 2px;
  }
`;

const NavContainer = styled.div`
  margin: 0px auto;
  display: flex;

  padding-top: 50px;
  align-items: center;
`;

const NavLeft = styled.div`
  display: flex;
  flex: 0.7;
  padding: 15px;
  align-items: center;

  > .MuiSvgIcon-root {
    font-size: 50px;
    margin-top: 0;
    margin-left: 5px;
    color: white;
  }
`;

const TitleLink = styled(Link)`
  font-size: 2.3rem;
  font-family: 'Francois One', sans-serif;
  font-family: 'Permanent Marker', cursive;
  color: whitesmoke;
  padding-left: 8px;
  text-decoration: none;
`;
const NavRight = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 0.3;
  margin-right: 3px;
  padding: 15px;
`;
