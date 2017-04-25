import React, { Component } from 'react'

class TeamList extends Component {
    render() {
        const { teamName, color, players, remove } = this.props
        // const teamList = players.map((p,i) => <Player name={p} />)
        const teamList = players.map(function (p, i) {
            return <Player name={p} remove={remove} index={i} />
        })
        return (
            <div>
                <h4 style={{ color: color }}>{teamName}</h4>
                <ul className="bulletless">
                    {teamList}
                </ul>
                <button onClick={this.props.toggleModal}>+</button>
            </div>
        );
    }
}

export default TeamList;

function Player(props) {
    return (
        <li key={props.index}>{props.name} <button onClick={ ()=> props.remove(props.index) }>-</button></li>
    )
}