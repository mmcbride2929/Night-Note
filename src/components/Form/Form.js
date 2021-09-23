import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import ButtonRatings from '../ButtonRatings/ButtonRatings';

const Note = () => {
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [charCount, setCharCount] = useState(0);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteObject = { author, note };
    console.log(noteObject);

    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noteObject),
    }).then(() => {
      history.push('/notes'); // directs us to notes page after added to db
      console.log('new blog added');
    });
  };

  return (
    <NoteContainer>
      <ButtonRatings />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label>Author:</label>
            <input
              required
              type="text"
              value={author}
              maxLength="30"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </InputContainer>
          <textarea
            required
            id="note"
            placeholder="Say Something..."
            value={note}
            maxLength="500"
            onChange={(e) => {
              setNote(e.target.value);
              setCharCount(e.target.value.length);
            }}
          />
          <CharCount>
            <h5>{charCount + ' Characters Remaining..'} </h5>
          </CharCount>

          <button type="submit">Submit</button>
        </form>
      </FormContainer>
    </NoteContainer>
  );
};

export default Note;

const CharCount = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: right;
  h5 {
    padding: 5px;
    color: whitesmoke;
    font-size: 1rem;
    font-weight: 500;
  }
`;

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

const FormContainer = styled.div`
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

  form > button {
    text-decoration: none;
    margin: 0 auto;
    padding: 20px;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 8px 1px;
    border: none;
    background-color: whitesmoke;
    color: black;
    width: 80px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;
    letter-spacing: 0.3px;

    :hover {
      cursor: pointer;
      background-color: #506680;
      color: whitesmoke;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }
`;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
