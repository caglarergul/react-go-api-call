import React, {Component} from 'react';
import Aux from './hoc/Auxiliary';
import {Route} from 'react-router-dom';
import Content from './containers/Content';
import Layout from './containers/UI/Layout';

import AddPerson from './containers/API/AddPerson';
import GetPeople from './containers/API/GetPeople';
class App extends Component {
    render() {
        return (
            <Aux>
            <Layout>
                <Route path="/" exact component={Content}/>

                <Route path="/add-person" component={AddPerson}/>

                <Route path="/get-people" component={GetPeople}/>

            </Layout>



            </Aux>
        );
    }
}

export default App;
