import React from 'react';
import actions from './action.js';
console.log(actions);
export default class CountButton extends React.Component{
    render(){
            return (
                <div>
                    <h1>count</h1>
                    <button>Add by 1</button>
                    <button>Add by 10</button>
                    <button>Delay 2 second and add by 5</button>
                </div>
        )
    }
}
