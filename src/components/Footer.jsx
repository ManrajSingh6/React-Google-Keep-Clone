import React from 'react';

const date = new Date();
const currYear = date.getFullYear();

function Footer(){
    return (<footer>
        <h4 className='footer'>Created by Manraj Singh. Copyright © {currYear}</h4>
    </footer>);
}

export default Footer;