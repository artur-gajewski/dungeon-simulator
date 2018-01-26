import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Navigation from '../components/Navigation';
import Npc from './Npc';
import Trap from './Trap';

class Room extends Component {
    render() {
        const { room, title } = this.props;
        let nextButton = null;

        if (room.end !== true) {
          nextButton = (
            <button onClick={() =>
                this.props.onGoForward()}>
                <FontAwesome name='thumbs-o-up' /> {room.buttonText}
            </button>
          );
        }

        return (
            <div>
                <Navigation />
                <div className="hero-small">{ title }</div>
                <div id="main-content">
                    <article>
                        <div className="game">
                            <h3>{ room.title }</h3>
                            
                            {room.description.map(
                                function(description, index){
                                    return <p key={index}>{description}</p>;
                                }
                            )}
                            
                            {room.trap &&
                                <Trap trap={room.trap}/>
                            }
                            
                            {room.npc &&
                                <Npc npc={room.npc}/>
                            }
                            
                            { nextButton }
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Room;
