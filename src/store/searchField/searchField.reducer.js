import { SEARCH_FIELD_ACTIONS_TYPE } from "./searchField.types";

const SEARCHFIELD_INITIAL_STATE = {
  searchField: "",
};

export const searchFieldReducer = (
  state = SEARCHFIELD_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_FIELD_ACTIONS_TYPE.SET_SEARCH_FIELD:
      return { ...state, searchField: payload };

    default:
      return state;
  }
};
