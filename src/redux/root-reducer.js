import { combineReducers } from "redux";
import eventsReducer from "../reducer/events/events.reducer.js";


const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
