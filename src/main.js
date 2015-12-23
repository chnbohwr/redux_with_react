import Redux, { createStore, combineReducers } from 'redux';

let button = document.getElementById('mybutton');
let text = document.getElementById('count');

//=========action part=============//
const CLICKEVENT = 'CLICKEVENT';
function clickAction() {
    return{
        type: CLICKEVENT
    };
}

//=========reducer part=============//
let initialState = {
    clickCount: 0
};
function clickReducer (state = initialState, action) {
    switch (action.type) {
        case CLICKEVENT:
            console.log('CLICKEVENT');
            state.clickCount += 1;
            return { ...state };
        default:
            return state;
    }
}

//=========store part=============//
let reducers = combineReducers({
    clickState: clickReducer
});
let store = createStore(reducers);

//=========view part=============//
button.addEventListener("click", function(){
    store.dispatch(clickAction())
});
store.subscribe(function(){
    text.textContent = store.getState().clickState.clickCount
})
