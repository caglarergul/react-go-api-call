import React, {Component} from 'react';
import axios from 'axios';
import Person from './Person';
class GetPeople extends Component {
    state = {people: []};


    componentDidMount() {
        axios.get("https://rest-api-example-go.herokuapp.com/people").then(response => {
            const people = response.data;
            const updatedPeople = people.map(persons => {
                return {
                    ...persons
                }
            });


            this.setState({people: updatedPeople});

        })
            .catch(err => {
                //console.log(err);
                this.setState({error : true});
            });
    }


    render() {

        let people = this.state.people.map(person => {
            return <Person key={person.id} id={person.id} firstname={person.firstname} lastname={person.lastname} />;
        });

        return(
            <div style={{marginTop: '10px'}}>

                <h1>People</h1>
                <div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                        <th>#</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        </thead>
                        <tbody> {people}</tbody>

                    </table>
                </div>

            </div>

        );
    }
}

export default GetPeople;