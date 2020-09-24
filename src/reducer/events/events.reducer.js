import { EventActionTypes } from "./events.types.js";
const INITIAL_STATE = {
  data: null,
};

const eventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventActionTypes.SET_EVENTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default eventsReducer;
