import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items.js';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});