import React from 'react';
import styled from 'styled-components';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import { H1, H2 } from './../components/Text';
import { Container } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { ratingPageTheme } from './../components/themes';
import RatingBar from '../components/RatingBar.js';

const Profile = () => {
  const history = useHistory();
  const createPorfile = () => {};

  return (
    <Container>
      <ThemeProvider theme={ratingPageTheme}>
        <H1>Hello Brown Fox!</H1>
        <div className="avatar" />
        <H2>RATE YOUR SKILLS!</H2>

        <RatingBar />
        <Button onClick={createPorfile}>START YOUR FIRST</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Profile;