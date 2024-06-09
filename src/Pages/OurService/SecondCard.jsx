import React from "react";
import SerCard from "./SerCard";
import SeconCard from "./SeconCard";

const SecondCard = () => {
  const Newdata = [
    {
      Icon: "fa fa-desktop fa-4x",
      HedingText: "Responsive",
      paragraphText:"Responsive Web Design (RWD) presents new challenges for webmasters and data network.",
      buttonText: 'Read More',
    },
    {
        Icon: "fa fa-cog fa-4x",
        HedingText: "Slideshows",
        paragraphText:"Designed to delight,our slideshows weave together your photos, words, music and even video to tell a.",
        buttonText: 'Read More',
      },
      {
        Icon: "fa fa-leaf fa-4x",
        HedingText: "Fast Easy",
        paragraphText:"Every free website serves a different purpose. For example, this website's purpose is to help you.",
        buttonText: 'Read More',
      },
      {
        Icon: "fa fa-umbrella fa-4x",
        HedingText: "2 Layouts",
        paragraphText:"There are two variations of how a two-column layout can look. The first is where there is only text that spans.",
        buttonText: 'Read More',
      },
  ]; 

  return (
    <>
    <div style={styles.container}>
      {Newdata.map((card, index) => (
        <SeconCard
          key={index}
          Icon={card.Icon}
          HedingText={card.HedingText}
          paragraphText={card.paragraphText}
          buttonText={card.buttonText}
        />
      ))}
    </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "85%",
    margin: "0 auto",
    gap: '28px'
  },
};

export default SecondCard;
