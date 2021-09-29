import React from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import styled from 'styled-components';

const Home = () => {
  // getting date & time to pass to Header & Form
  const current = new Date();

  let date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  let currentTime = current.toLocaleDateString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: '2-digit',
  });

  return (
    <Wrapper>
      <Header date={date} />
      <body>
        <Form time={currentTime} />
      </body>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: #22272e;
`;
