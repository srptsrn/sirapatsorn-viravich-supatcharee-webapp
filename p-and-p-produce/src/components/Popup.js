// import React from 'react';
// import './stylePopup.css';

// class Popup extends React.Component {
//     static propTypes = {
//         accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
//         options: PropTypes.objectOf(PropTypes.any).isRequired,
//         actions: PropTypes.func.isRequired,
//     };

//     constructor(props) {
//         super(props);
//         this.state = { showPopup: false };
//         this.togglePopup = this.togglePopup.bind(this);
//     }

//     togglePopup() {
//         this.setState({
//             showPopup: !this.state.showPopup,
//         });
//     }

//     render() {
//         return (
//             <div className='popup'>
//                 <div className='popup\_inner'>
//                     <h1>{this.props.text}</h1>
//                     <button onClick={this.props.closePopup}>close me</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Popup;

import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';

ReactDom.render(
    <Popup />,
    document.getElementById('popupContainer')
);