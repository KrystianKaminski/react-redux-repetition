import * as actionTypes from './actionTypes'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add5 = (val) => {
    return {
        type: actionTypes.ADD_5,
        val: val
    }
}

export const subtract5 = (val) => {
    return {
        type: actionTypes.SUBTRACT_5,
        val: val
    }
}