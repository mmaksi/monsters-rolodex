import { createAction } from "../../utils/reducer/reducer.utils"
import { SEARCH_FIELD_ACTIONS_TYPE } from "./searchField.types"

export const setSearchFieldAction = (searchField) => {
    return createAction(SEARCH_FIELD_ACTIONS_TYPE.SET_SEARCH_FIELD, searchField)
}