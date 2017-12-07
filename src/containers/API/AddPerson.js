/**
 * Created by caglarergul on 6.12.2017.
 */
import React , {Component} from 'react';
import axios from "axios/index";


//
class AddPerson extends Component {

    state = {
        firstname: '',
        lastname: ''
    };

    postDataHandler = () => {
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname
        };

        axios.post("https://rest-api-example-go.herokuapp.com/people", data)
            .then(response => {
                console.log(response);
                alert("Successfully added!")
            });

    };

    render() {
        return (
            <div style={{marginTop: '10px'}}>

                <h1>Add a new person</h1>


                <div className="col-lg-8 offset-lg-2" style={{marginTop:'30px'}}>
                    <div className="form-group">
                        Firstname: <input type="text" className="form-control" value={this.state.firstname} onChange={(event) => this.setState({firstname: event.target.value})}/>
                    </div>
                    <div className="form-group">
                        Lastname: <input type="text" className="form-control" value={this.state.lastname} onChange={(event) => this.setState({lastname: event.target.value})}/>
                    </div>
                    <button className="btn btn-success btn-block" onClick={this.postDataHandler}>Add Person</button>
                </div>
            </div>
        )
    }
}

export default AddPerson;