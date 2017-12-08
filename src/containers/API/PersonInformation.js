import React, {Component} from 'react';
import axios from "axios/index";

class PersonInformation extends Component {

    updatePersonHandler = () => {
        const ID = this.props.id;
        const data = {
            firstname: this.props.firstname,
            lastname: this.props.lastname

        };
        axios.put("https://rest-api-example-go.herokuapp.com/people/" + ID, data)
            .then(response => {
                console.log(response);

                alert("Successfully Updated user:!" + this.props.firstname);
            });
    };

    render() {
        return(
            <tr>
                <th>{this.props.id}</th>
                <th><input type="text" className="form-control" value={this.props.firstname} onChange={(event) => this.setState({firstname: event.target.value})} /> </th>
                <th><input type="text" className="form-control"  value={this.props.lastname} onChange={(event) => this.setState({lastname: event.target.value})} /> </th>
                <th><button className="btn btn-secondary btn-sm" onClick={this.updatePersonHandler}>Apply</button></th>
            </tr>
        );
    }
}

export default PersonInformation;