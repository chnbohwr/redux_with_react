// import Redux, { createStore, combineReducers, applyMiddleware } from 'redux';
//
// let button = document.getElementById('mybutton');
// let button2 = document.getElementById('mybutton2');
// let button3 = document.getElementById('mybutton3');
// let text = document.getElementById('count');
//
//
// //=========store part=============//
// let createStoreWithMiddleware = applyMiddleware(delayMiddleware)(createStore);
// let reducers = combineReducers({
//     clickState: clickReducer
// });
// let store = createStoreWithMiddleware(reducers);
//
// //=========view part=============//
// button.addEventListener('click', () => {
//     store.dispatch(clickAction())
// });
// button2.addEventListener('click',() => {
//     store.dispatch(clickAction(10));
// });
// button3.addEventListener('click',() => {
//     store.dispatch(clickAction(5, 2));
// })
// store.subscribe(function(){
//     text.textContent = store.getState().clickState.clickCount
// })

import ReactDom from 'react-dom';
import React from 'react';
import CountButton from 'component/CountButton';
ReactDom.render(<CountButton/>, document.getElementById('app'))
