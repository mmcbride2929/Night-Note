import React from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';

const Home = () => {
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
    <>
      <Header date={date} />
      <body>
        <Form time={currentTime} />
      </body>
    </>
  );
};

export default Home;
