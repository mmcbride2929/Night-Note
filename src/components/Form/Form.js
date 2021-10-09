import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ButtonRating from '../ButtonRating/ButtonRating';
import db from '../../firebase/firebase';
import firebase from 'firebase';

const Form = ({ time }) => {
  const [author, setAuthor] = useState(''); // author value
  const [note, setNote] = useState(''); // text area value
  const [charCount, setCharCount] = useState(200); // text area characters amount
  const [activeButton, setActiveButton] = useState(null); // button rating highlight

  let history = useHistory(); // hook to access react router history object

  const handleSubmit = (e) => {
    e.preventDefault();

    // creating timestamp for sorting in db
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    let dateForOrder = timestamp();

    // creating a note object to push to db
    const noteObject = { author, note, dateForOrder, activeButton, time };

    db.collection('notes').add(noteObject); // sending to firebase
    history.push('/notes');
  };

  // require active button
  const handleError = (e) => {
    e.preventDefault();
    alert("Please select a rating button below today's date.");
  };

  return (
    <NoteContainer>
      {/* Rating Buttons */}
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
      {/* author, note, & submit */}
      <FormContainer>
        <form onSubmit={activeButton ? handleSubmit : handleError}>
          <InputContainer>
            <label>Author:</label>
            <input
              required
              type="text"
              value={author}
              maxLength="25"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </InputContainer>
          <textarea
            required
            id="note"
            placeholder="Say Something..."
            value={note}
            maxLength="200"
            onChange={(e) => {
              setNote(e.target.value);
              setCharCount(200 - e.target.value.length);
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

export default Form;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid #373e47;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media (max-width: 1024px) {
    width: 85%;
  }
`;

// to hold onClick
const Wrapper = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0px auto;
    margin-top: 10px;
    padding: 5px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  label {
    text-align: center;
    color: whitesmoke;
    margin: 0 15px;

    @media (max-width: 500px) {
      padding: 5px;
    }
  }

  input {
    padding: 5px;
    width: 30%;
    border-radius: 5px;
    border: 2px solid #373e47;
    background-color: #2d333b;
    outline: none;
    color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media (max-width: 768px) {
      width: 60%;
    }
    @media (max-width: 500px) {
      width: 80%;
    }
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
    height: 150px;
    width: 80%;
    margin: 0px auto;
    padding: 40px 20px;
    border-radius: 5px;
    background-color: #2d333b;
    border: 2px solid #373e47;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    resize: none;
    outline: none;
  }

  form > button {
    text-decoration: none;
    margin: 0 auto;
    margin-bottom: 15px;
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

    @media (max-width: 1024px) {
      margin-top: 30px;
    }

    :hover {
      cursor: pointer;
      background-color: #373e47;
      color: whitesmoke;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }
`;

const CharCount = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: right;

  @media (max-width: 1024px) {
    padding: 8px;
    text-align: center;
  }

  h5 {
    padding: 5px;
    color: whitesmoke;
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 500px) {
      font-size: 0.9rem;
      padding-bottom: 0px;
    }
  }
`;
