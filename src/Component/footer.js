import React from 'react';
import YoutubeImage from './Youtube.png';
import InstagramImage from './Instagram.png'
import facebookimage from './Facebook.png'
import tiktokiamge from './TikTok.png'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021 Haider Vibes. All rights reserved.</p>
      <a href="http://www.facebook.com/editingvibe" className='footicon'><img src={facebookimage} alt="" width="30px" /></a>
      <a href="https://www.instagram.com/a_haider1214/" className='footicon'><img src={InstagramImage} alt="" width="30px" /></a>
      <a href="https://youtube.com/@haidervibes" className='footicon'><img src={YoutubeImage} alt="" width="30px" /></a>
      <a href="https://www.tiktok.com/@alithunter1?lang=en" className='footicon'><img src={tiktokiamge} alt="" width="30px" /></a>
    </footer>
  );
};

export default Footer;
