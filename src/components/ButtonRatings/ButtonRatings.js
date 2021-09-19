import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ButtonRatings = () => {
  return (
    <ButtonContainer>
      <Button className="positive">Productive</Button>
      <Button className="negative">Average</Button>
      <Button className="neutral">Unproductive</Button>
    </ButtonContainer>
  );
};

export default ButtonRatings;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 20px;
  justify-content: center;

  Button {
    border-radius: 5px;
    color: white;
    width: 140px;
    margin: 0px 35px;
    border: 1px solid black;

    background-color: #506680;

    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;

    :hover {
      background-color: whitesmoke;
      border: 1px solid black;
      color: black;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }
`;
