import Navbar from './Navbar';
import Footer from './footer'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './About.css';

const apiKey = 'AIzaSyAWaVkIsxNaIZ2-ZJWKLfRGnq1GFeGCVF8';
const channelId = 'UCkWH2fzlxinr2avaAcrga6w';

const YoutubeAbout = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;
        const response = await axios.get(url);
        const { data } = response;

        if (data.items.length > 0) {
          const aboutText = data.items[0].snippet.description;
          setAbout(aboutText);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-about">
        <h1>About Us</h1>
        <img src='Imageicon.jpeg' width={'30%'} style={{display:'flex',float:'right', margin:'5%', boxShadow:'0 0 30px rgba(0, 0, 0, 0.5)'}}></img>
        <h3>Description:</h3>
        <p>{about}</p>
      </div>
      <Footer />
    </div>
  );
};

export default YoutubeAbout;
