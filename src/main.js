import Redux, { createStore, combineReducers, applyMiddleware } from 'redux';

let button = document.getElementById('mybutton');
let button2 = document.getElementById('mybutton2');
let button3 = document.getElementById('mybutton3');
let text = document.getElementById('count');

//=========action part=============//
const CLICKEVENT = 'CLICKEVENT';
function clickAction(count = 1, delay = 0) {
    return{
        type: CLICKEVENT,
        count,
        delay
    };
}

//=========middleware part=============//
const delayMiddleware = store => next => action => {
    if (action.delay) {
        return setTimeout(() => {
            next(action);
        }, action.delay * 1000);
    } else {
        next(action);
    }
}

//=========reducer part=============//
let initialState = {
    clickCount: 0
};
function clickReducer (state = initialState, action) {
    switch (action.type) {
        case CLICKEVENT:
            state.clickCount += action.count;
            return { ...state };
        default:
            return state;
    }
}

//=========store part=============//
let createStoreWithMiddleware = applyMiddleware(delayMiddleware)(createStore);
let reducers = combineReducers({
    clickState: clickReducer
});
let store = createStoreWithMiddleware(reducers);

//=========view part=============//
button.addEventListener('click', () => {
    store.dispatch(clickAction())
});
button2.addEventListener('click',() => {
    store.dispatch(clickAction(10));
});
button3.addEventListener('click',() => {
    store.dispatch(clickAction(5, 2));
})
store.subscribe(function(){
    text.textContent = store.getState().clickState.clickCount
})
