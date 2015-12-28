let initialState = {
    clickCount: 0
};

export default function clickReducer (state = initialState, action) {
    switch (action.type) {
        case CLICKEVENT:
            state.clickCount += action.count;
            return { ...state };
        default:
            return state;
    }
}
