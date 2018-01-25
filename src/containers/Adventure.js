import React, { Component } from 'react';
import Room from '../components/Room';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adventureActions from '../ducks/adventure';

class Adventure extends Component {
    constructor() {
        super();
        this.onGoForward = this.onGoForward.bind(this);
    }

    onGoForward() {
        this.props.adventureActions.goForward();
    }

    componentWillMount() {
        if (!this.props.data.hasOwnProperty("rooms")) {
            this.props.adventureActions.adventureNotSet();
        }
    }

    render() {
        if (!this.props.data.hasOwnProperty("rooms")) {
            return null;
        }

        const room = this.props.data.rooms[this.props.progress];

        return (
            <Room room={room} title={this.props.data.title} onGoForward={() => this.onGoForward()} />
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.adventure.data,
        progress: state.adventure.progress,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adventureActions: bindActionCreators(adventureActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventure);
