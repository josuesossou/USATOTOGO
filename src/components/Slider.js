import React from 'react';
import ReactSlider from 'react-slider'
import styled from "styled-components"

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`

const StyledThumb = styled.div.attrs({
    className: 'h-10 w-5 top-10 bg-blue-900 shadow-md rounded-md'
})`
    cursor: grab;
`

const Thumb = (props, state) => <StyledThumb {...props}></StyledThumb>;

const StyledTrack = styled.div.attrs((props) => ({
    className:`
        rounded-md
        ${props.index === 1 ? 'bg-gray-300' : 'bg-blue-700'}
    `
}))`
    top: 0;
    bottom: 0;
`

const Track = (props, state) => <StyledTrack {...props} index={state.index} currValue={state.currValue} />;

export default ({ onChange, min, max }) => (
    <StyledSlider
        defaultValue={[min + ((max - min)/2)]}
        min={min}
        max={max}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={onChange}
        className='flex items-center'
    />
)