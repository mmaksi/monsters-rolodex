import { createAction } from "../../utils/reducer/reducer.utils"
import { MONSTERS_ACTIONS_TYPE } from "./monsters.types";

export const fetchMonstersPending = () =>
  createAction(MONSTERS_ACTIONS_TYPE.FETCH_MONSTERS_PENDING);

export const fetchMonstersSuccess = (monsters) =>
  createAction(
    MONSTERS_ACTIONS_TYPE.FETCH_MONSTERS_SUCCESS,
    monsters
  );

export const fetchMonstersFailure = (error) =>
  createAction(MONSTERS_ACTIONS_TYPE.FETCH_MONSTERS_FAILED, error);

export const fetchMonstersPendingAsync = () => {
    return async (dispatch) => {
      dispatch(fetchMonstersPending());
      
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const monsters = await response.json()
        dispatch(fetchMonstersSuccess(monsters));
      } catch (error) {
        dispatch(fetchMonstersFailure(error));
      }
    };
  };