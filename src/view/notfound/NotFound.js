import React, { Component } from 'react';
import './NotFound.css';
import sadFace from '../../resources/images/404-sad-face.png';

class NotFound extends Component {
    
    render (){
        return <div>
            <div className='main-404'>
                <div className='title-404'>
                    404
                </div>
                <img src={sadFace} className='sad-face-logo' alt='Sad Face' />
                <br />
                <div className='body-404'>
                    Oops! That page must've gotten lost in the nethers...<br />
                    Try looking elsewhere padawan.
                </div>
            </div>
        </div>
    }
}

export default NotFound;