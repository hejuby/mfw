import React, { FunctionComponent } from 'react';

type ColorProps = {
  setColor: Function
}

const ColorSetting: FunctionComponent<ColorProps> = ({ setColor }) => {
  const onClickHandle = (targetColor: string) => {
    setColor(targetColor);
  }

  return (
    <div>
      <h3>Choose your color.</h3>
      <input type="color" id="color" name="color" onChange={ (event) => { onClickHandle(event.target.value); }} />
      {/* <br/>
      <button onClick={() => {onClickHandle()}}>Next</button> */}
    </div>
  );
}

export default ColorSetting;