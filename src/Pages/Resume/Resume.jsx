import React, { useEffect } from 'react';
import ResumeHero from './ResumeHero'
import ResumeCard from './ResumeCard'
import ResumeSection from './ResumeSection'
import ResumeMain from './ResumeMain'



const Resume = () => {
  useEffect(() => {
    document.title = "12+ Years Experience PHP Developer in Delhi NCR, India";
  }, []);
  return (
   <>
   <ResumeHero/>
   <ResumeCard/>
   <ResumeSection/>
   <ResumeMain/>
   </>
  )
}

export default Resume