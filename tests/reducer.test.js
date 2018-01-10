import { Reducer } from 'redux-testkit';
import uut from '../src/Redux/reducer';
import {FETCH_DATA_FULFILLED, FETCH_DATA_PENDING, FETCH_DATA_REJECTED} from '../src/Redux/constants'
// import * as actionTypes from '../actionTypes';
const initialState = {data:[], isFetching:false, error:false};
describe('store/topics/reducer', () => {

    it('should have passed initial state', () => {
      expect(uut({data:[]},{})).toEqual({data:[]});
    });
  
    it('should not affect state', () => {
      Reducer(uut).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    });
  
    it('should store fetched topics', () => {
      const action = {type: FETCH_DATA_PENDING};
      Reducer(uut).expect(action).toReturnState({...initialState, isFetching: true});
    });
    it('should store fetched topics', () => {
      const action = {type: FETCH_DATA_REJECTED};
      Reducer(uut).expect(action).toReturnState({...initialState, isFetching: false, error:true});
    });
    it('should store fetched topics', () => {
        const data = [{id:1},{id:2}] 
      const action = {type: FETCH_DATA_FULFILLED, payload:data };
      Reducer(uut).expect(action).toReturnState({...initialState, isFetching: false, data},);
    });
  
    
  });