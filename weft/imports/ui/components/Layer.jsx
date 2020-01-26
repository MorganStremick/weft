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
            offsetX: null,
            offsetY: null,
            selected: null,
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    renderPredicate(predicateID) {
        return (
            <Predicate key={predicateID}
                       left={this.state.left[predicateID]}
                       top={this.state.top[predicateID]}
                       onMouseDown={e => this.handleMouseDown(predicateID, e)}
            />
        );
    }

    handleMouseMove(e) {
        const allTop = {...this.state.top};
        const allLeft = {...this.state.left};
        const left = e.clientX - this.state.offsetX;
        const top = e.clientY - this.state.offsetY;
        const selected = this.state.selected;

        allTop[selected] = top;
        allLeft[selected] = left;

        this.setState({
            top: allTop,
            left: allLeft,
        });

        return;
    }

    handleMouseDown(predicateID, e) {
        const top = this.state.top[predicateID];
        const left = this.state.left[predicateID];

        this.setState({
            offsetX: e.clientX - left,
            offsetY: e.clientY - top,
            selected: predicateID,
        });

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        console.log('down');
        return;
    }

    handleMouseUp() {
        this.setState({
            offsetX: null,
            offsetY: null,
            selected: null,
        });

        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        console.log('up');
        return;
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
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