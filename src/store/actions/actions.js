export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_5 = 'ADD_5'
export const SUBTRACT_5 = 'SUBTRACT_5'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add5 = (val) => {
    return {
        type: ADD_5,
        val: val
    }
}

export const subtract5 = (val) => {
    return {
        type: SUBTRACT_5,
        val: val
    }
}

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId
    }
}