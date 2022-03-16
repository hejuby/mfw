import React, { useState } from 'react';
import './App.css';
import FileHandler from './components/FileHandler';
import RatioSetting from './components/RatioSetting';
import ColorSetting from './components/ColorSetting';
import ImageHandler from './components/ImageHandler';

const App = () => {
  const [inputImage, setImage]: [File | undefined, Function] = useState(undefined);
  const [wRatio, setWRatio]: [Number, Function] = useState(0);
  const [hRatio, setHRatio]: [Number, Function] = useState(0);
  const [imageColor, setColor]: [string | undefined, Function] = useState(undefined);

  return (
    <div className="App">
      <h2>Margins for Wallpaper</h2>
      <FileHandler setImage={setImage} />
      <br/>
      <RatioSetting setWRatio={setWRatio} setHRatio={setHRatio} />
      <br/>
      <ColorSetting setColor={setColor} />
      <br/>
      <ImageHandler image={inputImage} ratio={wRatio && hRatio && [wRatio, hRatio]} color={imageColor} />
    </div>
  );
}

export default App;
