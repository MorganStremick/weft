import React, { Component } from 'react';
import Draggable from './Draggable';
import Predicate from './Predicate';

export default class Layer extends Component {
    render() {
        return (
            <Draggable>
                <Predicate />
            </Draggable>
        );
    }
}