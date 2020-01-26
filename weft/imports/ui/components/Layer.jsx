import React, { Component } from 'react';
import Predicate from './Predicate';
import styled from 'styled-components';
import { _ } from 'underscore';

export default class Layer extends Component {
    constructor(props) {
        super(props);
        const predicates = this.getPredicates();
        let left = {};
        let top = {};
        _.each(predicates, (val, i) => { left[val._id] = 40 * i; top[val._id] = 40 * i; });

        this.state = {
            predicateIDs: _.pluck(predicates, '_id'),
            left,
            top,
            selected: null,
        };

        this.handleMouseDown.bind(this);
        this.handleMouseMove.bind(this);
        this.handleMouseUp.bind(this);
    }

    renderPredicate(predicateID) {
        return (
            <Predicate key={predicateID}
                       left={this.state.left[predicateID]}
                       top={this.state.top[predicateID]}
                       onMouseDown={(e) => this.handleMouseDown(predicateID, e)}
            />
        );
    }

    handleMouseMove() {
        return;
    }

    handleMouseDown() {
        return;
    }

    handleMouseUp() {
        return;
    }

    getPredicates() {
        return [
            { _id: 1 },
            { _id: 2 },
            { _id: 3 },
        ];
    }

    render() {
        return (
            <div>
                {_.map(this.state.predicateIDs, (predicateID) => this.renderPredicate(predicateID))}
            </div>
        );
    }
}