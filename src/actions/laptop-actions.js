import * as types from './action-types';

export const changeSelection = (option) => ({
    type: types.CHANGE_SELECTION,
    option
});
