import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import Pagination from '../components/Pagination/Pagination';

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [noteArray, setNoteArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // fetching => json.db & catching the state return
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/notes')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setNoteArray(data);
          setCurrentPage(Math.ceil(data.length / postsPerPage));
        });
    }, 500);
  }, []);

  // getting current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = noteArray.slice(indexOfFirstPost, indexOfLastPost);

  //change page
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

const Wrapper = styled.div``;

const Loading = styled.p`
  color: whitesmoke;
`;

const NotesContainer = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column-reverse;
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
  }
`;

const ContentWrapper = styled.div`
  background-color: #22272e;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex: 0.25;
  word-break: break-word;

  .MuiSvgIcon-root {
    font-size: 1.8rem;
    padding: 5px;
  }

  h3 {
    padding: 7px;
  }

  h5 {
    padding-bottom: 5px;
  }
`;
