import type { AnyAction } from "./actions";
import {
  SET_GROUP_DATA,
  SET_DISCLOSED_GROUP,
  SET_INITIAL_DATA,
  TOGGLE_TASK,
} from "./constants";
import type { State } from "./state";

export const reducer = (state: State, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_TASK:
      return {
        ...state,
        taskCheckedById: {
          ...state.taskCheckedById,
          [action.payload]: !state.taskCheckedById[action.payload],
        },
      };
    case SET_DISCLOSED_GROUP:
      return {
        ...state,
        disclosedGroup: action.payload,
      };
    case SET_GROUP_DATA:
      return {
        ...state,
        groupsData: action.payload,
      };
    case SET_INITIAL_DATA:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
