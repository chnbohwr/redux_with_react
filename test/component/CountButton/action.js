import {TYPES, clickAction} from 'component/CountButton/action.js';

describe('test CountButton action', function () {
    
    it('test clickAction without params', function () {
        let answer = {
            type: TYPES.CLICKEVENT,
            count: 1,
            delay: 0
        };
        
        expect(clickAction()).to.deep.equal(answer);
    
    });
    
    it('test clickAction with params', function () {
        let answer = {
            type: TYPES.CLICKEVENT,
            count: 3,
            delay: 1
        };
        
        expect(clickAction(3,1)).to.deep.equal(answer);
    
    });
    
});