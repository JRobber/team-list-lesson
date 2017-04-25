import React, { Component } from 'react'

class Modal extends Component {
    render() {
        const add = this.props.add;

        let getPlayerName = function(){
            return this.refs.playerName.value;
        }
        getPlayerName = getPlayerName.bind(this);
        return (
            <div className="add-modal-container">
                <div className="inner-modal">
                    <input ref="playerName" />
                    <br />
                    <button onClick={() => {
                        return add(getPlayerName())
                    }}>Add</button>
                </div>
            </div>
        )
    }
}

export default Modal;