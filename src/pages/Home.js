import React from 'react';
import Header from '../components/Header/Header';
import ButtonRatings from '../components/ButtonRatings/ButtonRatings';
import Note from '../components/Note/Note';

const Home = () => {
  return (
    <>
      <Header />
      <body>
        <ButtonRatings />

        <Note />
      </body>
    </>
  );
};

export default Home;
