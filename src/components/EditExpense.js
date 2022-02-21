import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
    <div>This is from Edit expense page with ID {props.match.params.id}</div>
)};

export default EditExpensePage;