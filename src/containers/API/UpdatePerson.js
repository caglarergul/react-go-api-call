import React, {Component} from 'react';
import axios from 'axios';
import UpdateItem from './DeleteItem';

class UpdatePerson extends Component {


    updatePersonHandler = () => {

    };


    render() {



        return (
            <div style={{marginTop: '10px'}}>

                <h1>Delete Person</h1>
                <div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                        <th>#</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>DELETE</th>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default UpdatePerson;