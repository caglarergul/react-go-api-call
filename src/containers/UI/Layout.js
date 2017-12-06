import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Content from '../Content';

import Header from '../Header';

const layout = (props) => {
    return (
        <Aux>
            <div className="container-fluid">
                <Header/>
                <Content/>
            </div>
        </Aux>
    );
};

export default layout;