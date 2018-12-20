import React from 'react';
import PawsibleHeader from '../shared/PawsibleHeader';
import PawsibleTable from '../shared/PawsibleTable';
import data from '../static/exampleDogJson';

function Home(props){
;    return (
        <div>
            <PawsibleHeader text={'Pawsible Pets'}/>
            <PawsibleTable tableData={data}/>
        </div>
    )
}

export default Home;