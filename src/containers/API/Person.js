import React from 'react';


const person = (props) => (
<tr>
    <th scope="row">{props.id}</th>
    <td>{props.firstname}</td>
    <td>{props.lastname}</td>
</tr>
);

export default person;