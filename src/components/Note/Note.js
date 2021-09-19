import React from 'react';
import styled from 'styled-components';
import SubmitButton from '../SubmitButton/SubmitButton';

const Note = () => {
  return (
    <TextContainer>
      <form>
        <InputContainer>
          <label>Author:</label>
          <input required type="text" />
        </InputContainer>
        <textarea required id="note" placeholder="Say Something..." />
        <SubmitButton />
      </form>
    </TextContainer>
  );
};

export default Note;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;

  label {
    text-align: center;
    color: whitesmoke;
    margin: 0 15px;
  }

  input {
    padding: 5px;
    width: 20%;
    border-radius: 5px;
    background-color: #858ca0;
    border: none;
    outline: none;
    color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

const TextContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

  margin: 8px;
  display: flex;

  form > #note::placeholder {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    color: whitesmoke;
    opacity: 1;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  form > textarea {
    color: whitesmoke;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    height: 200px;
    width: 60%;
    margin: 0px auto;
    padding: 40px 20px;
    border-radius: 5px;
    background-color: #858ca0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    resize: none;
    border: none;
    outline: none;
  }
`;
