import React from "react";
import "../Resume/ResumSection.css";

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
              <ul class="rn-nav-list nav nav-tabs" role="tablist">
                <li class="nav-item recommended">
                <a class="nav-link no-active" id="rb2basicPlan-1" data-toggle="tab" href="#brtab_link_1" role="tab" aria-selected="true"><h3>Education</h3></a>
              </li>
              <li class="nav-item no-recommended">
                <a class="nav-link no-active" id="rb2basicPlan-2" data-toggle="tab" href="#brtab_link_2" role="tab" aria-selected="false"><h3>Professional Skills</h3></a>
              </li>
              <li class="nav-item no-recommended">
                <a class="nav-link no-active" id="rb2basicPlan-3" data-toggle="tab" href="#brtab_link_3" role="tab" aria-selected="false"><h3>Experience</h3></a>
              </li>
            </ul>

            <div className="personal-experience-content">
                <div className="personal-experience-inner">
                    <div className="content">
                    <h4 class="maintitle">Education Quality</h4>
                    <div className="experience-list">
                    <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                               
                                 <h4 class="list-title">Master of Computer Application (MCA)</h4>
                                <span class="list-sub-title">New Delhi, University of SMU (2011 - 2012)</span>
                              </div>
                              <div class="date-of-time">
                                <span>75%</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">BSc.it in Computer Science</h4>
                                <span class="list-sub-title">New Delhi, University of SMU (2008 - 2010)</span>
                              </div>
                              <div class="date-of-time">
                                <span>73%</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">Intermediate</h4>
                                <span class="list-sub-title">Intermediate, U. P. Board (2006 - 2007)</span>
                              </div>
                              <div class="date-of-time">
                                <span>70%</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">High School, B. H Board</h4>
                                <span class="list-sub-title">Bhuvneswar Fatah Alam High School (2004 - 2005)</span>
                              </div>
                              <div class="date-of-time">
                                <span>65%</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="personal-experience-inner">
                    <div className="content">
                       <h4 class="maintitle">Job Experience</h4>
                       <div className="experience-list">

                       <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">Sr. Tech Lead Engineer</h4>
                                <span class="list-sub-title">AcmeWeb Technology- (Now 2022 - Present) </span>
                              </div>
                              <div class="date-of-time">
                                <span>Gurugram</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">PHP Team Lead</h4>
                                <span class="list-sub-title">Maison D’ Auraine pvt ltd - (May 2018 - Oct 2022)</span>
                              </div>
                              <div class="date-of-time">
                                <span>Gurugram</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">Sr PHP Developer</h4>
                                <span class="list-sub-title">IDS Logic pvt ltd - (Aug 2015 - May 2018)</span>
                              </div>
                              <div class="date-of-time">
                                <span>Noida</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">PHP Developer</h4>
                                <span class="list-sub-title">WebMatrix pvt ltd- (Jan 2015 - Jul 2015) </span>
                              </div>
                              <div class="date-of-time">
                                <span>Delhi</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4 class="list-title">Jr PHP Developer</h4>
                                <span class="list-sub-title">Sharp Vision Consultants pvt ltd - (May 2013 - Dec 2014)</span>
                              </div>
                              <div class="date-of-time">
                                <span>Delhi</span>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
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
