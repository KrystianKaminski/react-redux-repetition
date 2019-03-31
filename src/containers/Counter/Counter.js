import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props._counter} />
                <CounterControl label="Increment" clicked={this.props._onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props._onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props._add5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props._subtract5Counter} />
                <hr />
                <button onClick={this.props._onStoreResult}>Store Result</button>
                <ul>
                    {this.props._storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props._onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        _counter: state.counter,
        _storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        _onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        _add5Counter: () => dispatch({ type: actionTypes.ADD_5, val: 5 }),
        _subtract5Counter: () => dispatch({ type: actionTypes.SUBTRACT_5, val: 5 }),
        _onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT, }),
        _onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter);