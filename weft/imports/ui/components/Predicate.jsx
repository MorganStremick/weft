import React, { Component } from 'react';

export default class Predicate extends Component {
    render() {
         const style = {
             width: '20px',
             height: '20px',
             backgroundColor: 'pink',
             position: 'fixed',
             top: `${this.props.top}px`,
             left: `${this.props.left}px`,
         }

        return (
            <div style={style} onMouseDown={this.props.onMouseDown}></div>
        );
    }
}