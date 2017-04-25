import React, { Component } from 'react';
import './App.css';

import TeamList from './TeamList'
import Modal from './Modal'

class App extends Component {

  constructor() {
    super();

    this.state = {
      players1: ["Dibs", "Me", "Brennon", "Trump"],
      players2: ["Gibs", "Ge", "Grennon", "Grump"],
      modalVisible: false
    }

    this.removeFromTeam1 = this.removeFromTeam1.bind(this);
    this.removeFromTeam2 = this.removeFromTeam2.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.addToTeam1 = this.addToTeam1.bind(this);
  }

  removeFromTeam1(index) {
    let state = this.state;
    state.players1.splice(index, 1)
    this.setState(state);
  }

  removeFromTeam2(index) {
    let state = this.state;
    state.players2.splice(index, 1)
    this.setState(state);
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  addToTeam1(newPlayer) {
    let team1 = this.state.players1;
    team1.push(newPlayer);
    this.setState({
      players1: team1
    })
    this.toggleModal();
  }

  addToTeam2(newPlayer) {
    let team2 = this.state.players2;
    team2.push(newPlayer);
    this.setState({
      players2: team2
    })
    this.toggleModal();
  }

  render() {
    return (
      <div className="fuzzy">
        <h2>Team 1 vs Team 2</h2>

        <hr />

        <TeamList teamName="Team 1"
          color="red"
          players={this.state.players1}
          remove={this.removeFromTeam1}
          toggleModal={this.toggleModal}
         />

        <TeamList teamName="Team 2"
          color="blue"
          players={this.state.players2}
          remove={this.removeFromTeam2}
          toggleModal={this.toggleModal}
          add={this.addToTeam2} />

        {this.state.modalVisible ? <Modal add={this.addToTeam1}/> : null}

      </div>
    );
  }
}



export default App;
