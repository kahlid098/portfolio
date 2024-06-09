import React from 'react';
import '../Contact/Contact.css'
import ConCard from './ConCard';

const ContactCard = () => {
  const cardsData = [
    {
      image: 'fa-regular fa-envelope',
      title: 'E-mail',
      description: 'Electronic mail, most commonly referred to as email or e-mail since is a method of exchanging digital messages from an author to one or more recipients.'
    },
    {
      image: 'fa fa-mobile',
      title: 'Phone',
      description: 'The days when you could only call a company are long gone. Support provided via chat, email, phone and social media sites is a must today.'
    },
    {
      image: 'fa fa-comments',
      title: 'Live chat',
      description: 'With the growing popularity of live chat over the recent years many online business owners naturally start questioning themselves "Should I get it too?.'
    }
  ];

  return (
    <div className='cards-container'>
    <div className="d-flax">
      {cardsData.map((card, index) => (
        <ConCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    </div>
  );
};

export default ContactCard;
