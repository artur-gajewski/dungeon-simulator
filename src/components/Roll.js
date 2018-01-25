import React, { Component } from 'react';

class Roll extends Component {
    render() {
        return (
            <span className="npc-roll">
                {this.props.hp.rollStatic} ({this.props.hp.rollAmount}d{this.props.hp.rollSides})
            </span>
        );
    }
}

export default Roll;
