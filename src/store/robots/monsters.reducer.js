import { MONSTERS_ACTIONS_TYPE } from "./monsters.types";

export const MONSTERS_INITIAL_STATE = {
  monsters: [],
  isLoading: false,
  error: null,
};

export const monstersReducer = (state = MONSTERS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MONSTERS_ACTIONS_TYPE.FETCH_MONSTERS_PENDING:
      return { ...state, isLoading: true };
    case MONSTERS_ACTIONS_TYPE.FETCH_MONSTERS_SUCCESS:
      return { ...state, isLoading: false, monsters: payload };
    case MONSTERS_ACTIONS_TYPE.FETCH_MONSTERS_FAILED:
      return { ...state, monsters: payload };
    default:
      return state;
  }
};
