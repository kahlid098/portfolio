import React from "react";
import "../Resume/ResumSection.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Education from "./Education";
import Professional from "./Professional";
import Experience from "./Experience";

const ResumeSection = () => {
  return (
    <>
    <div className="resume-tab">
      <div className="conatainer">
        <div class="section-title">
          <span class="subtitle sub-title">11+ YEARS OF EXPERIENCE</span>
          <h2 class="text-center sec-review-ti">My Resume</h2>
        </div>

        <div className="resume-tab-compnent">
            <div className="rn-resume-area">

     <Tabs>
        <TabList className="tabmm">
           <Tab className="liaas">Education</Tab>
           <Tab className="liaas">Professional Skills</Tab>
           <Tab className="liaas">Experience</Tab>
         </TabList>
      <TabPanel>
          <Education/>
      </TabPanel>
       <TabPanel>
          <Professional/>
      </TabPanel>
      <TabPanel>
          <Experience/>
      </TabPanel>
    </Tabs>
            </div>
        </div>
      </div>
    </div>
      <div className="cv-btn">
      <button className="mycv-btn">Download My CV</button>
    </div>
    </>
  );
};  

export default ResumeSection;
