import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [noteArray, setNoteArray] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/notes')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setNoteArray(data);
        });
    }, 500);
  }, []);

  return (
    <NotesContainer>
      {isLoading && <Loading>LOADING...</Loading>}
      {noteArray &&
        noteArray.map((note, index) => {
          return (
            <SingleNote key={index}>
              <h3>{note.author}</h3>
              <p>{note.note}</p>
              <p>
                {note.activeButton === 1 && 'Productive'}
                {note.activeButton === 2 && 'Average'}
                {note.activeButton === 3 && 'Unproductive'}
              </p>
            </SingleNote>
          );
        })}
    </NotesContainer>
  );
};

export default Notes;

const Loading = styled.p`
  color: whitesmoke;
`;

const NotesContainer = styled.div``;
const SingleNote = styled.div`
  color: whitesmoke;
`;
