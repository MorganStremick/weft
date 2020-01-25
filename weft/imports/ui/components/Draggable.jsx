import React, { Component } from 'react';

export default class Draggable extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}