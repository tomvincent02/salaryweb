import React from 'react';
import axios from 'axios';
// import { response } from 'express';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.onChangenameGiven = this.onChangenameGiven.bind(this);
    this.onChangeplayerident = this.onChangeplayerident.bind(this);

    this.state = {
      nameGiven : '',
      other: [],
      playerident: '',
      final: []
    }
  }

  componentDidMount() {
  }


  onChangenameGiven(e) {
    this.setState({
      nameGiven: e.target.value
    });
  }

  onChangeplayerident(e) {
    this.setState({
      playerident: e.target.value
    });
  }


  onSubmit = (e) => {
    e.preventDefault();

    const player = {
      nameGiven: this.state.nameGiven
    }

    console.log(player);

    axios.get('http://localhost:3301/getbodyid', player)
    .then((res) => {
      if (res.data.length > 0) {
        this.setState({players: res.data})
      }
    }).catch((error) => {
      console.log(error);
    })
    console.log(this.state.players);
    this.setState({
      nameGiven: ''
    })
  };


  onSubmitOther = (e) => {
    e.preventDefault();

    const final = {
      playerident : this.state.playerident
    }

    console.log(final);

    axios.get('http://localhost:3301/getsalfromid', final)
    .then((res) => {
      if (res.data.length > 0) {
        this.setState({final: res.data})
      }
    }).catch((error) => {
      console.log(error);
    })
    console.log(this.state.final);
    this.setState({
      playerident: ''
    })
    

  }

  render() {

    return (
      <div>
        <h2> Salary Webpage</h2>
      <form onSubmit={this.onSubmit}>
        <label>Players Name</label>
        <div className='form-input'> <input type='text' value={this.state.nameGiven} onChange = {this.onChangenameGiven}/>
          
            {/* <select value={this.state.nameGiven} onChange={this.onChangenameGiven}>
              {this.state.players.filter(function(player) {
              return <option key={this.state.nameGiven} value = {this.state.nameGiven}> {player} </option>;
              })}

            </select> */}
        </div>
        <button>Submit</button>

        <div> {this.state.players} </div>

        <div className='form-input'></div>

        
      </form>

      <form onSubmit={this.onSubmitOther}>
            <label> Player ID</label>
            <div className='form-input'> <input type='text' value={this.state.playerident} onChange = {this.onChangeplayerident}/>
            </div>
            <button>Submit</button>
            <div> {this.state.final} </div>
      </form>
      </div>
    )}
}

export default App;