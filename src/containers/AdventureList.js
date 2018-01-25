import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Adventures from '../components/Adventures';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adventureActions from '../ducks/adventure';

class AdventureList extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Adventures adventureActions={this.props.adventureActions}/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdventureList);

//export default Main;
