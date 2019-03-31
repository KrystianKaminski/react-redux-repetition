import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                console.log('as')
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props._counter} />
                <CounterControl label="Increment" clicked={this.props._onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props._onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props._add5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props._subtract5Counter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        _counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        _onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        _add5Counter: () => dispatch({ type: 'ADD_5' }),
        _subtract5Counter: () => dispatch({ type: 'SUBTRACT_5' }),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter);