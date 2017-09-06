import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adventureActions from '../ducks/adventure';

import './Main.css';

class Main extends Component {
    render() {

        console.log("Props:");
        console.log(this.props);

        return (
            <div>
                <Navigation />
                {React.cloneElement(this.props.children, {...this.props})}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        adventureActions: bindActionCreators(adventureActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

//export default Main;
