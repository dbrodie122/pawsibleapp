import React from 'react';

class AddPet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            petName: '',
            breed: '',
            ownerName: '',
            notes: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

//capture text from every input
    // change to field, handleInputChange(event)
    // bind the function in the constructor
    // access event.Target.name, save to a variable
    // set state of the property that is the same as the name of the input
    // the state will be event.target.value
//submit text via POST to our service

handleInputChange(e){
    const { name , value } = e.target;
    console.log('NAME:', name, 'VALUE:', value);
    this.setState({ [name]: value });
}

    render(){
        return (
            <form>
                <label>Pet Name
                    <input type='text' name='petName' onChange={this.handleInputChange} value={this.state.petName}/>
                </label>
                <label>Breed
                    <input type='text' name='breed' onChange={this.handleInputChange} value={this.state.breed}/>
                </label>
                <label>Owner Name
                    <input type='text' name='ownerName' onChange={this.handleInputChange} value={this.state.ownerName}/>
                </label>
                <label>Notes
                    <input type='text' name='notes' onChange={this.handleInputChange} value={this.state.notes}/>
                </label>
                <button>Add Pet</button>
            </form>
        );
    }
}

export default AddPet;
