import React from 'react';

const renderDogRows = (tableData) => {
    return tableData.map((pet) => {
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

const PawsibleTable = (props) => {
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
                   renderDogRows(props.tableData)
                }
            </tbody>
        </table>
    ) 
};

export default PawsibleTable;
