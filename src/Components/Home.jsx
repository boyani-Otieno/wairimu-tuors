import React, { useEffect } from 'react';
import '../App.css';
import { useState } from 'react';

import twooImage from '../assets/twoo.jpg';
import oneImage from '../assets/onee.jpg';
import threeeImage from '../assets/threee.jpg';
import fourrImage from '../assets/fourr.jpg';

const ImageSlider = [
  {
    url: twooImage,
    title: 'TOUR KENYA',
    body:
      'This website showcases the travel experiences curated by Bilha Wairimu, highlighting the diverse regions across Kenya that she can guide tourists through. Explore the beauty and richness of Kenyas various locales as Bilha Wairimu offers a unique perspective and expertise in making your travel experiences memorable and authentic. Discover the enchanting destinations, cultural gems, and hidden treasures across the Kenyan landscape through the lens of this dedicated travel guide.',
  },
  {
    url: oneImage,
    title: 'VISIT ALL THE BEST PLACES',
    body: "This website showcases the travel experiences curated by Bilha Wairimu, highlighting the diverse regions across Kenya that she can guide tourists through. Explore the beauty and richness of Kenya's various locales as Bilha Wairimu offers a unique perspective and expertise in making your travel experiences memorable and authentic. Discover the enchanting destinations, cultural gems, and hidden treasures across the Kenyan landscape through the lens of this dedicated travel guide.",
  },
  {
    url: threeeImage,
    title: 'TOUR STRESS FREE',
    body:
      'This website showcases the travel experiences curated by Bilha Wairimu, highlighting the diverse regions across Kenya that she can guide tourists through. Explore the beauty and richness of Kenyas various locales as Bilha Wairimu offers a unique perspective and expertise in making your travel experiences memorable and authentic. Discover the enchanting destinations, cultural gems, and hidden treasures across the Kenyan landscape through the lens of this dedicated travel guide.',
  },
  {
    url: fourrImage,
    title: 'MAKE WONDERFUL MEMORIES',
    body:
      'This website showcases the travel experiences curated by Bilha Wairimu, highlighting the diverse regions across Kenya that she can guide tourists through. Explore the beauty and richness of Kenyas various locales as Bilha Wairimu offers a unique perspective and expertise in making your travel experiences memorable and authentic. Discover the enchanting destinations, cultural gems, and hidden treasures across the Kenyan landscape through the lens of this dedicated travel guide.',
  },
];

const Home = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${ImageSlider[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <div className='heroRaila'>
      <div style={bgImageStyle}></div>
      <div className='transparent-background'></div>
      <div className='description-raila'>
        <div txt>
          <h1>{ImageSlider[currentState].title}</h1>
          <p>{ImageSlider[currentState].body}</p>
        </div>
        <div className='carousel-boult'>
          {ImageSlider.map((_, index) => (
            <span key={index} onClick={() => goToNext(index)}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
