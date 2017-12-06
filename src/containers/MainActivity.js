/**
 * Created by caglarergul on 6.12.2017.
 */

import React , {Component} from 'react';
import Aux from './../hoc/Auxiliary';
import Layout from './UI/Layout';
class MainActivity extends Component {
    render() {
        return (
            <Aux>
                <Layout/>
            </Aux>
        )
    }
}

export default MainActivity;
