import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style/Model.css';
import Ampi from '../images/models/Rebirthing/Ampi.png';
import MidRoom from '../images/models/Rebirthing/Mid-Room.png';
import RebGroup from '../images/models/Rebirthing/Rib-Group.png';
import RebirthingRoom from '../images/models/Rebirthing/Rebirthing-Room.png';
import Pool from '../images/models/Mindfulness/Pool.png';
import MindfulnessRoom from '../images/models/Mindfulness/MindfulnessRoom.png';
import therapy from '../images/models/Mindfulness/therapy.png';
import occupationaltherapy from '../images/models/Mindfulness/occupational-therapy.png';
import SensePool from '../images/models/Senses/Sense-pool-therapy.png';
import SenseTherapy from '../images/models/Senses/Senses_-therapy.png';
import SenseGarden from '../images/models/Senses/Senses-garden.png';
import SenseSound from '../images/models/Senses/Senses-sound-therapy.png';

export default function Model() {
  const { source } = useParams();

  let title = '';
  let className = '';
  let button1 = '';
  let button2 = '';
  let button3 = '';
  let button4 = '';
  let bgi1 = '';
  let bgi2 = '';
  let bgi3 = '';
  let bgi4 = '';
  let videoToShow = '';

  switch (source) {
    case 'Sensations':
      title = 'פרוגרמת האי לחושים';
      className = 'Sens';
      videoToShow = 'https://res.cloudinary.com/de3pvycqi/video/upload/v1690635254/mind-space/Senses_video_final_brwqdj.mp4';
      button1 = 'SensePool';
      bgi1 = SensePool;
      button2 = 'SenseTherapy';
      bgi2 = SenseTherapy;
      button3 = 'SenseGarden';
      bgi3 = SenseGarden;
      button4 = 'SenseSound';
      bgi4 = SenseSound;
      break;
    case 'Rebirthing':
      title = 'פרוגרמת האי לנשימה';
      className = 'Rebirth';
      videoToShow = 'https://res.cloudinary.com/de3pvycqi/video/upload/v1690635252/mind-space/Rebirthing_video_final_orqjus.mp4';
      button1 = 'Amphi';
      bgi1 = Ampi;
      button2 = 'Rebirthing-Room';
      bgi2 = RebirthingRoom;
      button3 = 'Mid-Room';
      bgi3 = MidRoom;
      button4 = 'Reb-Group';
      bgi4 = RebGroup;
      break;
    case 'Mindfulness':
      title = 'פרוגרמת האי לקְשִׁיבוּת';
      className = 'Mindful';
      videoToShow = 'https://res.cloudinary.com/de3pvycqi/video/upload/v1690635252/mind-space/Mindfulness_video_final_ubb6th.mp4';
      button1 = 'POOl';
      bgi1 = Pool;
      button2 = 'MindfulnessRoom';
      bgi2 = MindfulnessRoom;
      button3 = 'therapy';
      bgi3 = therapy;
      button4 = 'occupationaltherapy';
      bgi4 = occupationaltherapy;
      break;
    default:
      break;
  }

  // Preload all images
  const imageUrls = [Ampi, MidRoom, RebGroup, RebirthingRoom, Pool, MindfulnessRoom, therapy, occupationaltherapy, SensePool, SenseTherapy, SenseGarden, SenseSound];

  useEffect(() => {
    const preloadImages = imageUrls.map((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
      return img;
    });

    return () => {
      // Clean up by removing event listeners and references to preloaded images
      preloadImages.forEach((img) => img.removeEventListener('load', onLoad));
    };
  }, [imageUrls]);

  const onLoad = (event) => {
    console.log('Image loaded:', event.target.src);
    // You can do additional handling here if needed
  };

  const [backgroundImage, setBackgroundImage] = useState('');
  const [playVideo, setPlayVideo] = useState(false); // State to track if the video should be played

  const handleButtonClick = (bgi) => {
    setBackgroundImage(`url(${bgi})`);
  };

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  return (
    <div className={`${className}`} style={{ backgroundImage }}>
      <button
        className={`${button1}`}
        onClick={() => handleButtonClick(bgi1)}
      ></button>
      <button
        className={`${button2}`}
        onClick={() => handleButtonClick(bgi2)}
      ></button>
      <button
        className={`${button3}`}
        onClick={() => handleButtonClick(bgi3)}
      ></button>
      <button
        className={`${button4}`}
        onClick={() => handleButtonClick(bgi4)}
      ></button>
      {/* Show the video when playVideo is true */}
      {playVideo && (
        <div className="videoContainer">
          <video controls autoPlay>
            <source src={videoToShow} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <button className="arrow-Button" onClick={handlePlayVideo}>
        <i className="fas fa-arrow-left"></i>
        <span className="virtual-tour">לסיור וירטואלי</span>
      </button>
    </div>
  );
}
