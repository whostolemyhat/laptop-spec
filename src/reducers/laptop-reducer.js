import * as types from '../actions/action-types';
import _ from 'lodash';

// TODO: to load data via network etc, use an async thunk action
// instead of loading data here
import data from '../data/options.json';

const initialState = data;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SELECTION:

        // clone state so we don't mutate directy
        const newState = _.clone(state);
        newState[action.option.section].options.forEach(option => {
            option.selected = false;
            if (option.name === action.option.name) {
                option.selected = true;
            }
        });

        // merge new state into existing
        return _.merge({}, state, newState);
    default:
        return state;
  }
};
