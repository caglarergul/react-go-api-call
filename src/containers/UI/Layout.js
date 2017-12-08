import React from 'react';


import Header from '../Header';

const layout = (props) => {
    return (
        // This is a Layout component, We divide it header and main sections
        <div className="container-fluid">
            <Header/>

            <div className="container"> {props.children}</div>
            <div className="text-center">copyright &copy; 2017 caglarergul@me.com</div>
        </div>

    );
};

export default layout;