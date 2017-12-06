import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Content from '../Content';

import Header from '../Header';

const layout = (props) => {
    return (

            <div className="container-fluid">
                <Header/>

                <div className="container"> {props.children}</div>

            </div>

    );
};

export default layout;