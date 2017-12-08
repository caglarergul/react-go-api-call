import React, {Component} from 'react';
import axios from 'axios';
import PersonInformation from './PersonInformation';

class UpdatePerson extends Component {


    state = {people: []};


    componentDidMount() { // getting people from rest api w/ axios
        axios.get("https://rest-api-example-go.herokuapp.com/people").then(response => {
            const people = response.data; // load response data to people obj.
            const updatedPeople = people.map(persons => {
                return { // then map that obj and assign to updatedPeople object, this is a basic swap process.
                    ...persons
                }
            });


            this.setState({people: updatedPeople}); // finally assign updatedPeople obj to real people obj.

        })
            .catch(err => {
                console.log(err); // catching errors.
                this.setState({error: true});
            });
    }


    render() {

        let people = this.state.people.map(person => {
            // Assign key id firstname and lastname attributes and values to PersonInformation Component.
            return <PersonInformation key={person.id} id={person.id} firstname={person.firstname} lastname={person.lastname}/>;
        });

        /* This is just embedding a component.*/

        return (

            <div style={{marginTop: '10px'}}>

                <h1>Update Person</h1>

                <table className="table table-striped">
                    <thead className="thead-dark">
                    <th>#</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th style={{width:'60px'}}>Update</th>
                    </thead>
                    <tbody>{people}</tbody>
                </table>


            </div>

        )
            ;
    }
}

export default UpdatePerson;