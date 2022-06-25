import { combineReducers } from 'redux';
import { monstersReducer } from './robots/monsters.reducer';
import { searchFieldReducer } from './searchField/searchField.reducer';


// the key is the reducer slice and the value is the reducer function
export const rootReducer = combineReducers({
  monsters: monstersReducer,
  searchField: searchFieldReducer,
});
