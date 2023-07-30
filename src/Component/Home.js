import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import './Home.css';
import First from './1.jpg';
import second from './2.jpg';
import third from './4.jpg';
import pic1 from './pc1.jpg';
import pic2 from './pc2.jpg';
import pic3 from './pc3.jpg';
import pic4 from './pc4.jpg';
import pic5 from './pc5.jpg';
import pic6 from './pc6.jpg';
import pic7 from './pc7.jpg';
const Home = () => {
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
    setWelcomeText(`Hello Buddy! Welcome to Haider Vibes`);
  }, []);

  const [showMoreImages, setShowMoreImages] = useState(false);

  const toggleImages = () => {
    setShowMoreImages(!showMoreImages);
  };

  const imgUrls = [pic1,pic2,pic3,pic4,pic5,pic6,pic7];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [imgUrls.length]);

  const backgroundImageStyle = {
    backgroundImage: `url(${imgUrls[currentImageIndex]})`,
  };

  return (
    <div>
      <Navbar />
      <div className="container welcome" id="Welcome" style={backgroundImageStyle}>
        <h1>{welcomeText}</h1>
      </div>

      <div className="container" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <h2 className="">Description :</h2>
        <p className="theme">
          Assalam u Alaikum! Welcome to our YouTube mobile editing channel. Here, we specialize in teaching you how to
          create stunning videos right from your mobile device. Our channel is perfect for anyone who wants to learn how
          to edit videos on the go, without the need for expensive editing software or equipment.
          <br />
          <br />
          Our tutorials cover a wide range of topics, from basic editing techniques to advanced tips and tricks. Be
          sure to subscribe to our channel and hit the notification bell to stay updated on our latest tutorials.
          #haidervibes
        </p>
      </div>

      <div className="container">
        <button
        className='btn'
          id="btn"
          onClick={toggleImages}
        >
          {showMoreImages ? 'Hide Images' : 'Show More Images'}
        </button>
      </div>

      {showMoreImages && (
        <div className="container" style={{ marginBottom: '5%', transition: 'ease 2s' }}>
          <div className="row">
            <div className="col-lg-4">
              <img src={First} alt="" width="100%" />
            </div>
            <div className="col-lg-4">
              <img src={second} alt="" width="100%" />
            </div>
            <div className="col-lg-4">
              <img src={third} alt="" width="100%" />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
