import clickReducer, { initialState } from 'component/CountButton/reducer.js';
import { TYPES } from 'component/CountButton/action.js'

describe('test for CountButton reducer', function () {

    it('test default state', function () {
       
        expect(clickReducer(undefined, {})).to.deep.equal(initialState);
    
    });

    it('test insert action', function () {
        
        const answer = {
            clickCount: 10
        };
        
        expect(
            clickReducer(initialState, {
                type: TYPES.CLICKEVENT,
                count: 10
            })
        ).to.deep.equal(answer);
    })
});