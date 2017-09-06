import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Navigation />
                {React.cloneElement(this.props.children, {...this.props})}
            </div>
        );
    }
}

export default Main;
