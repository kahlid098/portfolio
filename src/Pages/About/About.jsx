import React, { useEffect } from 'react';
import AboutHero from "./AboutHero";

const About = () => {
  useEffect(() => {
    document.title = "Highly Experienced PHP Developer-Mangento, Shopify and WordPress ...";
  }, []);
  return (
  <>
  <AboutHero/>
  </>
  );
};

export default About;
