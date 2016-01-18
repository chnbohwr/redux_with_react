import { CountButton } from 'component/CountButton';
import ReactTestUtil from 'react-addons-test-utils';
import React from 'react';

// make spy action
let testAction = {
    clickAction: sinon.spy()
}

// make fake state
let testState = {
    clickCount:0
}

//render indo document
function setup(params = {}) {
    let props = {
        clickState: { testState, ...params },
        actions: testAction
    };
    let output = ReactTestUtil.renderIntoDocument(<CountButton { ...props }/>)
    return output;
}

describe('test CountButton component', function () {
   it('test render', function () {
       setup();
   });
        
   it('test click button', function () {
       let output = setup();
       var buttons = ReactTestUtil.scryRenderedDOMComponentsWithTag(output,'button');
       ReactTestUtil.Simulate.click(buttons[0]);
       expect(testAction.clickAction.called).to.equal(true);
   })
});