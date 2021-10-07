import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import Pagination from '../components/Pagination/Pagination';
import db from '../firebase/firebase';

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [noteArray, setNoteArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // fetching from firebase 'notes' collection
  useEffect(() => {
    db.collection('notes')
      .orderBy('time')
      .onSnapshot((snapshot) => {
        setTimeout(() => {
          // allow time for loading screen to appear
          setNoteArray(snapshot.docs.map((doc) => doc.data()));
          setIsLoading(false);
        }, 300);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // *am I mutating the original array with slice and reverse?*
  const notesReversed = noteArray.slice(0).reverse();
  const currentPosts = notesReversed.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <NotesContainer>
        {isLoading && <Loading>LOADING...</Loading>}
        {noteArray &&
          currentPosts.map((note, index) => {
            return (
              <SingleNote key={index}>
                <ContentWrapper>
                  {note.activeButton === 1 && <ThumbUpIcon />}
                  {note.activeButton === 2 && <ThumbsUpDownIcon />}
                  {note.activeButton === 3 && <ThumbDownIcon />}

                  <h3>{note.author}</h3>
                  <h5>{note.time}</h5>
                </ContentWrapper>
                <p>{note.note}</p>
              </SingleNote>
            );
          })}
      </NotesContainer>
      {!isLoading && (
        <Pagination
          className="test"
          totalPosts={noteArray.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </Wrapper>
  );
};

export default Notes;

const Wrapper = styled.div`
  background-color: #22272e;
`;

const Loading = styled.p`
  color: whitesmoke;
  font-size: 2rem;
  text-align: center;
  padding: 100px;
`;

const NotesContainer = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const SingleNote = styled.div`
  border-radius: 5px;
  border: 2px solid #373e47;
  background-color: #2d333b;
  color: whitesmoke;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 10px auto;
  width: 85%;
  max-width: 800px;
  height: 120px;
  word-break: break-word;

  p {
    text-align: left;
    padding: 10px 15px;
    flex: 0.75;

    @media (max-width: 700px) {
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    height: 225px;
  }

  @media (max-width: 500px) {
    width: 80%;
    height: 300px;
    font-size: 1.1rem;
    margin-top: 0px;
    margin-bottom: 25px;
  }
`;

const ContentWrapper = styled.div`
  background-color: #22272e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex: 0.25;
  word-break: break-word;

  @media (max-width: 700px) {
    width: 100%;
  }

  .MuiSvgIcon-root {
    font-size: 1.8rem;
    padding: 5px;

    @media (max-width: 500px) {
      margin-top: 8px;
    }
  }

  h3 {
    padding: 7px;
    @media (max-width: 500px) {
      padding: 2px;
    }
  }

  h5 {
    padding-bottom: 5px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
