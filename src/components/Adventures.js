import React, { Component } from 'react';
import TheGoblinHideout from '../adventures/theGoblinHideout';

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
                            <button onClick={() =>
                                this.onSetAdventure(TheGoblinHideout)}>
                                Start this adventure
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Adventures;
