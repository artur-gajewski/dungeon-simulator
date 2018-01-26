import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import getDieValue from '../util/roll';

class Attack extends Component {
    constructor(props){
       super(props);
       this.state={ rolled: false, d20: 0, damage: 0 }
    }
 
    onClick(hp){
        this.setState({
            rolled: true, 
            d20: getDieValue(20), 
            damage: getDieValue(hp.rollSides) + hp.rollModifier
        })
    }
    
    render() {
        const { hp, type } = this.props;
          
        return (
            <div className="attack">
                <button onClick={this.onClick.bind(this, hp)}><FontAwesome name='chevron-right' /> Roll for NPC's {type} attack</button> {this.state.rolled &&
                    <div><FontAwesome name='chevron-right' /> Rolls {this.state.d20} (1d20) with {this.state.damage} hp damage if hit.</div>
                }
            </div>
        );
    }
}

export default Attack;
