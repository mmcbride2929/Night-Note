import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SubmitButton = () => {
  return (
    <ButtonContainer>
      <StyledLink to="/Notes">
        <Button>
          <p>Submit</p>
        </Button>
      </StyledLink>
    </ButtonContainer>
  );
};

export default SubmitButton;

const StyledLink = styled(Link)`
  text-decoration: none;

  Button {
    text-decoration: none;
    border-radius: 5px;
    background-color: whitesmoke;
    color: black;
    width: 140px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;
    letter-spacing: 0.5px;

    :hover {
      background-color: #506680;
      color: whitesmoke;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
