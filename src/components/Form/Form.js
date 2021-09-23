import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ButtonRating from '../ButtonRating/ButtonRating';

const Note = () => {
  const [author, setAuthor] = useState(''); // author value
  const [note, setNote] = useState(''); // text area value
  const [charCount, setCharCount] = useState(500); // text area characters amount
  const [activeButton, setActiveButton] = useState(null); // button ratings

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteObject = { author, note, activeButton };
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

  const handleError = (e) => {
    e.preventDefault();
    alert("Please select a rating button below today's date.");
  };

  return (
    <NoteContainer>
      <ButtonContainer>
        <Wrapper onClick={() => setActiveButton(1)}>
          <ButtonRating
            label={'productive'}
            className={activeButton === 1 ? 'active' : ''}
          />
        </Wrapper>
        <Wrapper onClick={() => setActiveButton(2)}>
          <ButtonRating
            label={'average'}
            className={activeButton === 2 ? 'active' : ''}
          />
        </Wrapper>
        <Wrapper onClick={() => setActiveButton(3)}>
          <ButtonRating
            label={'unproductive'}
            className={activeButton === 3 ? 'active' : ''}
          />
        </Wrapper>
      </ButtonContainer>

      <FormContainer>
        <form onSubmit={activeButton ? handleSubmit : handleError}>
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
              setCharCount(500 - e.target.value.length);
            }}
          />
          <CharCount>
            <h5>
              {charCount === 1
                ? charCount + ' Character Remaining..'
                : charCount + ' Characters Remaining..'}{' '}
            </h5>
          </CharCount>

          <button type="submit">Submit</button>
        </form>
      </FormContainer>
    </NoteContainer>
  );
};

export default Note;

const Wrapper = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 20px;
  justify-content: center;
`;

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
