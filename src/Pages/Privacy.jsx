import React, { useEffect } from 'react';
import '../Pages/term.css'

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy-Website Usage";
  }, []);
  return (
    <>
      <div className="service-image">
        <h1>Privacy Policy</h1>
      </div>

      <div className="container">
        <div class="col-md-12 text-justify">
          <p></p>
          <h3 className="privacy">Effective Date: Jan 21, 2021</h3>
          <strong>Privacy Policy</strong>
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
          <p></p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact through email at
            fahimshakir786@gmail.com
          </p>
          <p>
            <strong>Cookies</strong> are small files that are placed on Your
            computer, mobile device or any other device by a website, containing
            the details of Your browsing history on that website among its many
            uses.
          </p>
          <p>
            <strong>Other Information</strong> Our sales and marketing teams may
            collect other publicly available information about you from online
            sources. We do this after you have primarily contacted us, either
            directly through one of our websites, apps or indirectly through one
            of our partner/affiliate channel, to supplement our background
            knowledge about you in order to provide you better solutions that
            would fit your overall needs.
          </p>
          <p>
            <strong>Consent</strong> By using our website, you hereby consent to
            our Privacy Policy and agree to its Terms and Conditions
          </p>
          <p>
            <strong>Contact Us</strong>
            If you have any query regarding the Privacy Policy, please feel free
            to contact at
            <strong>fahimshakir786@gmail.com, 91 9718925775, 9268751849</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
