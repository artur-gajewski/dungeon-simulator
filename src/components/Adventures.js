import React, { Component } from 'react';
import TheGoblinHideout from '../database/adventures/theGoblinHideout';
import FontAwesome from 'react-fontawesome';

class Adventures extends Component {
    constructor(props) {
        super(props);
        this.onSetAdventure = this.onSetAdventure.bind(this);
    }

    onSetAdventure(adventure) {
        this.props.adventureActions.setAdventure(adventure);
    }

    render() {
        return (
            <div>
                <div className="hero-small">Adventures</div>
                <div id="main-content">
                    <article>
                        <div className="game-description">
                            <h3>{ TheGoblinHideout['title'] }</h3>
                            <h4>{ TheGoblinHideout['author'] }</h4>
                            <p>
                              { TheGoblinHideout['description'] }
                            </p>
                            <p>
                              { TheGoblinHideout['levelDescription'] }
                            </p>
                            <button onClick={() =>
                                this.onSetAdventure(TheGoblinHideout)}>
                                <FontAwesome name='sign-in' /> Start this adventure
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Adventures;
