import React, { Component } from 'react';
import Roll from './Roll';

class Trap extends Component {
    render() {
        const { trap } = this.props;
        
        return (
            <div className="trap">
                <p>{trap.description}</p>
                <p>In order to notice this trap, you need to make a {trap.notice.description} check for DC {trap.notice.dc}.</p>
                <p>If you noticed it, you need to make a {trap.disarm.description} check for DC {trap.disarm.dc} to disarm it.</p>
                <p>If you failed, you will receive <Roll hp={trap.hp} /> hit points of damage. {trap.outcome}</p>
            </div>
        );
    }
}

export default Trap;
