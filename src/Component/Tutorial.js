import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './footer';
import axios from 'axios';

const YOUR_API_KEY = 'AIzaSyAWaVkIsxNaIZ2-ZJWKLfRGnq1GFeGCVF8';
const CHANNEL_ID = 'UCkWH2fzlxinr2avaAcrga6w';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUR_API_KEY}&part=snippet&type=video&channelId=${CHANNEL_ID}&order=date&maxResults=12`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error', error);
      }
    };

    getVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container' style={{padding:'4%'}}>
        <h2 style={{ textAlign: 'center', padding: '2%' }}>YouTube Videos</h2>
        <div className='row'>
          {videos.map((video) => (
            <Card
              key={video.id}
              imageSrc={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
              link={`https://www.youtube.com/watch?v=${video.id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YouTubeVideos;