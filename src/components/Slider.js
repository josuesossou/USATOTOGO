import React from 'react';
import ReactSlider from 'react-slider'

export default () => {
    const inputEl = React.useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        // inputEl.current.resize();
        console.log(inputEl.current)
    };
    return (
        <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        </>
  );
}