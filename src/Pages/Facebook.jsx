import React, { useEffect } from 'react';
import '../Pages/facesbook.css'

const FacebookPageEmbed = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/FahimShakirWebsiteDeveloper/"
        data-tabs="timeline"
        data-width="500"
        data-height="310"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/facebook"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/facebook">Facebook</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPageEmbed;
