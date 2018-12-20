import React from 'react';

const renderDogs = function(tableData){
    return <h1>Test</h1>
}

function PawsibleTable(props){
    return(
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th> 
                    <th>Breed</th>
                    <th>Owner</th>
                    <th>Notes</th>
                </tr>
                {
                    props.tableData.map((pet) => {
                       return (
                        <tr key={pet.petId}>
                            <td>{pet.petId}</td>
                            <td>{pet.petName}</td> 
                            <td>{pet.breed}</td>
                            <td>{pet.ownerName}</td>
                            <td>{pet.notes}</td>
                        </tr>
                       );
                    })
                }
            </tbody>
        </table>
    ) 
};

export default PawsibleTable;
