import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';
import HeroContent from './HeroContent';
import CardContainer from './CardContainer';
import Footer from './Footer';

export default function Album() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <HeroContent />
        <CardContainer />
      </main>
      <Footer />
    </>
  );
}