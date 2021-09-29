import React from 'react';
import styled from 'styled-components';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavContainer>
      <Wrapper>
        <NavLeft>
          <TitleLink to="/">
            <h3 className="nav-title">Night-Note</h3>
          </TitleLink>
          <NightsStayIcon />
        </NavLeft>

        <NavRight>
          <StyledLink to="/notes">Notes</StyledLink>
          <StyledLink to="/">
            <CreateIcon />
          </StyledLink>
        </NavRight>
      </Wrapper>
    </NavContainer>
  );
};

export default Nav;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: whitesmoke;
  padding: 8px 12px;
  padding-top: 5px;
  padding-bottom: 0px;
  font-weight: 600;
  margin-top: 2px;
  letter-spacing: 0.9px;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    color: whitesmoke;
    border-radius: 5px;
    background-color: #22272e;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px, rgba(0, 0, 0, 0) 0px 2px 2px;
  }
`;

const NavContainer = styled.div`
  background-color: #2d333b;
`;

const Wrapper = styled.div`
  margin: 0px auto;
  display: flex;
  padding: 10px;
  align-items: center;
  max-width: 1200px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const NavLeft = styled.div`
  display: flex;
  flex: 0.7;
  padding: 15px;
  align-items: center;
  letter-spacing: 0.9px;

  @media (max-width: 500px) {
    padding: 20px;
  }

  > .MuiSvgIcon-root {
    font-size: 40px;
    margin-top: 0;
    margin-left: 5px;
    color: white;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const TitleLink = styled(Link)`
  font-size: 1.5rem;
  font-family: 'Permanent Marker', cursive;
  color: whitesmoke;
  padding-left: 8px;
  text-decoration: none;
`;
const NavRight = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: end;
  flex: 0.3;
  margin-right: 3px;
`;
