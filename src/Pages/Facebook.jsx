import React from "react";
import "../Pages/facesbook.css";

const FacebookPageEmbed = () => {


  return (
    <div>
     
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFahimShakirWebsiteDeveloper%2F%3Fref%3Dembed_page&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
        width="300"
        height="300"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookPageEmbed;
