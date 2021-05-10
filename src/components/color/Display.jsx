import React from 'react';
import PropTypes from 'prop-types';

//function based component with an implicit return
// const Display = (props) => (
//     <div>
//         hi {props.text}
//         <br />
//         and another {props.anotherProps}
//     </div>
// );
// export default Display;



//function based component with an implicit return and destructured props
const Display = ({ text, fgColor, bgColor }) => (
    <div style={{ color: fgColor, background: bgColor }}>{text}</div>
);

Display.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    fgColor: PropTypes.string.isRequired,
};

export default Display;



//class based component without an implicit return
// export default class Display extends React.Component {
//     render() {
//         return (
//             <div>
//                 hi{this.props.text}
//                 <br />
//                 and another prop {this.props.anotherProp}
//             </div>
//         )
//     }
// }
