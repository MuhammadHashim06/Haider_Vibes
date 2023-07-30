import React from 'react'
import Card2 from './Card2'
import Navbar from './Navbar'
import Footer from './footer'
import './Presets.css'
import './css/bootstrap.css';
import preset1 from './Presets/Preset1.dng'
import preset1img from './Presets/Preset1.jpg'
import preset2 from './Presets/Preset2.dng'
import preset2img from './Presets/Preset2.jpg'
import preset3 from './Presets/Preset3.dng'
import preset3img from './Presets/Preset3.jpg'


const Presets = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
      <h1 style={{textAlign:'center', padding:'2%'}}>Presets</h1>
      <div className="row">
      <Card2
        title="Kuch to hoga"
        imageUrl={preset1img}
        text="Preset Number 1"
        fileUrl={preset1}
      />
       <Card2
        title="Kuch to hoga"
      imageUrl={preset2img}
        text="Preset Number 2"
        fileUrl={preset2}
      />
       <Card2
        title="Kuch to hoga"
        imageUrl={preset3img}
        text="Preset Number 3"
        fileUrl={preset3}
      />
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Presets