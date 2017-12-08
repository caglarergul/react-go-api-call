import React, {Component} from 'react';
import axios from 'axios';

/**
 * I divided DeletePerson to two components. This one is DeleteItem. This component is rendering every item partial.
 * Divide and render is pretty cool thats why I choose it.
 * **/

class DeleteItem extends Component {


    deletePersonHandler = () => {
        axios.delete("https://rest-api-example-go.herokuapp.com/people/" + this.props.id)
            .then(response => {
                console.log(response);
                alert("Deleted Successfully!");
                window.location.reload();
            });
    };
    render () {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td style={{width: '60px'}}><button onClick={this.deletePersonHandler} className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> Delete</button></td>
            </tr>
        )
    }
}

export default DeleteItem;