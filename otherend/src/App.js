import React from 'react';
import axios from 'axios';

class App extends React.Component{

  state = {
    nameGiven:''
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      nameGiven: this.state.nameGiven
    };

    axios({
      url: 'http://localhost:3301/getbodyid',
      data:payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  render() {


    console.log('State', this.state);
    return (
      <div>
        <h2> Salary Webpage</h2>
      <form onSubmit={this.submit}>
        <div className='form-input'> <input type='text' name = 'nameGiven' value = {this.state.nameGiven} onChange={this.handleChange}/></div>
        <button>Submit</button>
      </form>
      </div>
    )}
}

export default App;