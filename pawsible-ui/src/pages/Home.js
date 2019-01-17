import React from 'react';
import PawsibleHeader from '../shared/PawsibleHeader';
import PawsibleTable from '../shared/PawsibleTable';

function Home(props){
    return (
        <div>
            <PawsibleHeader text={'Pawsible Pets'}/>
            <PawsibleTable tableData={props.pets}/>
        </div>
    )
}

export default Home;