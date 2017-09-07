import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Room extends Component {
    render() {
        let button = null;

        if (this.props.room.end !== true) {
          button = (
            <button onClick={() =>
                this.props.onGoForward()}>
                I survived, take me to next room!
            </button>
          );
        }

        return (
            <div>
                <Navigation />
                <div className="hero-small">{ this.props.title }</div>
                <div id="main-content">
                    <article>
                        <div className="game">
                            <h3>{ this.props.room.title }</h3>
                            <p>{ this.props.room.description }</p>

                            { button }
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Room;
