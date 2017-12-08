import React, {Component} from 'react';
import axios from "axios/index";

class PersonInformation extends Component {
    state = {
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        id: this.props.id
    };
    // Update Person w/ axios put() method.
    updatePersonHandler = () => {


        const ID = this.state.id;
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname

        };

        // Rest Api URL
        axios.put("https://rest-api-example-go.herokuapp.com/people/" + ID, data)
            .then(response => {
                console.log(response); // checking response in console.log

                alert("Successfully Updated! USERNAME: " + this.state.firstname);
            });
    };

    render() {
        // There is an action button to set input values to updatePersonHandler() method and put it into Rest Api.
        return (
            <tr>
                <th>{this.props.id}</th>
                <th><input type="text" className="form-control" value={this.state.firstname}
                           onChange={(event) => this.setState({firstname: event.target.value})}/></th>
                <th><input type="text" className="form-control" value={this.state.lastname}
                           onChange={(event) => this.setState({lastname: event.target.value})}/></th>
                <th>

                    <button className="btn btn-success btn-sm" onClick={this.updatePersonHandler}>
                        <i className="fa fa-refresh"></i> Apply
                    </button>
                </th>
            </tr>
        );
    }
}

export default PersonInformation;