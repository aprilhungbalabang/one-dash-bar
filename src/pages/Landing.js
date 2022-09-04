import React from 'react';
import Header from '../components/landing/Header';
import BannerContent from '../components/landing/BannerContent';
import About from '../components/landing/About';
import Event from '../components/landing/Event';
import { useIsMobileSize } from '../hooks/useIsMobileSize';

import classes from './Landing.module.scss';
import Container from 'react-bootstrap/Container';

const Landing = () => {
  const isMobileSize = useIsMobileSize();

  return (
    <>
      <Header isMobileSize={isMobileSize} />
      <Container fluid className={classes.banner}>
        {!isMobileSize && <BannerContent />}
      </Container>
      <Container fluid className={`bgc-dark ${classes.section}`}>
        {isMobileSize && <BannerContent />}
        <About />
        <Event isMobileSize={isMobileSize} />
      </Container>
    </>
  );
};

export default Landing;
