import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({bgColor, fgColor, text, onFgColorChange, onBgColorChange, onTextChange}) => (
    <>
    <input type='color' value={bgColor} onChange={onFgColorChange} />
    <input type='color' value={fgColor} onChange={onBgColorChange} />
    <input type='text' name='text' value={text} onChange={onTextChange} />
    </>
)

Controls.propTypes = {
    bgColor: PropTypes.string.isRequired,
    fgColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onBgColorChange: PropTypes.func.isRequired,
    onFgColorChange: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired,
}
export default Controls;