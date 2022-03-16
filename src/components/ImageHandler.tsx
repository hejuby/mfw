import React, { FunctionComponent } from 'react';

type ImageProps = {
  image: File | undefined,
  ratio: [Number, Number],
  color: string | undefined,
}

const ImageHandler: FunctionComponent<ImageProps> = ({ image, ratio, color }) => {
  const ratioCaculate = (image: File, ratio: [Number, Number]) => {

  }

  return (
    <div>
      {/* <img src={image && URL.createObjectURL(image)} alt="" width="200px" /> */}
      <h3>Image preview</h3>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 auto auto">
        <image href={image && URL.createObjectURL(image)} x="0" y="0" width="200px" />
      </svg>
      <br/>
      {(image  && color) && <button>Download</button>}
    </div>
  );
}

export default ImageHandler;