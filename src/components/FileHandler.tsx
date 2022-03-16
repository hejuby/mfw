import React, { FunctionComponent, useState } from 'react';
import './FileHandler.css';

type FileProps = {
  setImage: Function
}

const FileHandler: FunctionComponent<FileProps> = ({ setImage }) => {
  const [ifImg, setIfImg]: [Boolean, Function] = useState(true);

  const setSelectedImage = (files: FileList | null) => {
    console.log('files:', files);
    if (files) {
      const selectedImage: File = files[0];
      console.log('image:', selectedImage);
      if (selectedImage.type.startsWith('image/')) {
        setIfImg(true);
        setImage(selectedImage);
      } else setIfImg(false);
    }
  }
  
  return (
    <div>
      <h3>Upload your file.</h3>
      <h4 id="inputDescription">(Supports any .bmp, .gif, .jpeg, .png)</h4>
      <input type="file" className="imageInput" onChange={ (event) => {setSelectedImage(event.target.files)} } />
      {!(ifImg) && <h4 id="fileAlert">You need to upload an image file.</h4>}
    </div>
  );
}

export default FileHandler;