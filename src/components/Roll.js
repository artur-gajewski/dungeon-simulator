import React, { Component } from 'react';

class Roll extends Component {

    render() {
        const { hp } = this.props;

        const dieNumber = Math.floor(Math.random() * (hp.rollSides - 1 + 1) + 1);
        const multipler = hp.rollAmount;
        const outcome = dieNumber * multipler;

        return (
            <span className="npc-roll">
                {outcome} ({hp.rollAmount}d{hp.rollSides})
            </span>
        );
    }
}

export default Roll;
