import React, { FunctionComponent } from 'react';

type RatioProps = {
  setWRatio: Function,
  setHRatio: Function,
}

const RatioSetting: FunctionComponent<RatioProps> = ({ setWRatio, setHRatio }) => {
  const onChangeHandle = (name: string, value: string) => {
    (name.localeCompare('wratio') === 0) ? setWRatio(Number(value)) : setHRatio(Number(value))
  }

  return (
    <div>
      <h3>Enter your phone's aspect ratio.</h3>
      <label htmlFor="wratio">Width ratio:</label>
      <input type="number" step="0.1" id="wratio" name="wratio" onChange={ (event) => { onChangeHandle(event.target.name, event.target.value); } } /><br/>
      <label htmlFor="hratio">Height ratio:</label>
      <input type="number" step="0.1" id="hratio" name="hratio" onChange={ (event) => { onChangeHandle(event.target.name, event.target.value); } } />
    </div>
  );
}

export default RatioSetting;