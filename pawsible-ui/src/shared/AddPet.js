import React from "react";

class AddPet extends React.Component {
  initialState = {
    petName: "",
    breed: "",
    ownerName: "",
    notes: ""
  };
  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitNewPet = this.submitNewPet.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitNewPet(e) {
    e.preventDefault();
    // capture state
    // build a payload
    const payload = {
      petName: this.state.petName,
      breed: this.state.breed,
      ownerName: this.state.ownerName,
      notes: this.state.notes
    };
    console.log("after SubmitPet:", payload.anotherThis);
    // call POST method
    const url = "https://localhost:44386/api/pets/";
    const options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => {
        this.setState(this.initialState);
        console.log(response);
        this.props.getPets();
        return response.json();
      })
      .catch(err => console.error(err));
    // receive response
    // error handling
    // clear state
  }

  render() {
    return (
      <form>
        <label>
          Pet Name
          <input
            type="text"
            name="petName"
            onChange={this.handleInputChange}
            value={this.state.petName}
          />
        </label>
        <label>
          Breed
          <input
            type="text"
            name="breed"
            onChange={this.handleInputChange}
            value={this.state.breed}
          />
        </label>
        <label>
          Owner Name
          <input
            type="text"
            name="ownerName"
            onChange={this.handleInputChange}
            value={this.state.ownerName}
          />
        </label>
        <label>
          Notes
          <input
            type="text"
            name="notes"
            onChange={this.handleInputChange}
            value={this.state.notes}
          />
        </label>
        <button onClick={this.submitNewPet}>Add Pet</button>
      </form>
    );
  }
}

export default AddPet;
