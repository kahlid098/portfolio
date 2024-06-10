import React from "react";
import '../Resume/Resume.css'

const ResumeCard = () => {
  return (
    <div className="main-card">
      <div className="conatainer">
        <div>
          <span class="subtitle">Features</span>
          <h2 class="sec-review-ti">What I Do</h2>
        </div>
        <div className="reusable-compnent">
          <div class="reusable-card">
            <div class="menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
            <div class="content">
              <a href="#">
                <div class="title">Website Designing</div>
                <div class="description">
                  Most of us think that Web Design is a normal Designing process
                  but it's a different concept, it involves the integration of
                  image, banner.
                </div>
              </a>
            </div>
            <div class="arrow-icon">
              <a href="#">➤</a>
            </div>
          </div>

          <div class="reusable-card">
            <div class="menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-book-open"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div class="content">
              <a href="#">
                <div class="title">Website Development</div>
                <div class="description">
                  With rapid development in Website designing and development
                  techniques and technologies, website development becomes
                  easier.
                </div>
              </a>
            </div>
            <div class="arrow-icon">
              <a href="#">➤</a>
            </div>
          </div>

          <div class="reusable-card">
            <div class="menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-tv"
              >
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </div>
            <div class="content">
              <a href="#">
                <div class="title">Search engine optimization</div>
                <div class="description">
                  SEO, is one of those things that those of us in the web design
                  world kind of take for granted, but if you are new to the game
                  we can explain.
                </div>
              </a>
            </div>
            <div class="arrow-icon">
              <a href="#">➤</a>
            </div>
          </div>

          <div class="reusable-card">
            <div class="menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-smartphone"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div class="content">
              <a href="#">
                <div class="title">Payment Gateway Integration</div>
                <div class="description">
                  A merchant should consider selecting a payment gateway that
                  allows for international payments and accepts different
                  currencies. A presence on the Internet opens up the whole
                  world as a market to you..
                </div>
              </a>
            </div>
            <div class="arrow-icon">
              <a href="#">➤</a>
            </div>
          </div>

          <div class="reusable-card">
            <div class="menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div class="content">
              <a href="#">
                <div class="title">3rd Party APIs Integration</div>
                <div class="description">
                  APIs are an essential part of technology today and 3rd party
                  API integration plays a pivotal role in Flights, Hotel, Bus,
                  Bank, Shaping the APIs we use and the experiences we have.
                </div>
              </a>
            </div>
            <div class="arrow-icon">
              <a href="#">➤</a>
            </div>
          </div>

          <div class="reusable-card">
            <div class="menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-codepen"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </div>
            <div class="content">
              <a href="#">
                <div class="title">Cloud AWS, Azure hosting </div>
                <div class="description">
                  All data scientists are assumed to be familiar with Amazon Web
                  Services (AWS).Microsoft Azure is a cloud computing service
                  that allows users to create, modify, test, deploy, and
                  maintain applications.
                </div>
              </a>
            </div>
            <div class="arrow-icon">
              <a href="#">➤</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
