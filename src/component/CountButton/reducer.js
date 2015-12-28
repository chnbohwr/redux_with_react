import TYPES from './action.js'

let initialState = {
    clickCount: 0
};

export default function clickReducer (state = initialState, action) {
    switch (action.type) {
        case TYPES.CLICKEVENT:
            state.clickCount += action.count;
            return { ...state };
        default:
            return state;
    }
}
