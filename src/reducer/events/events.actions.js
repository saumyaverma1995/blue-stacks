import { EventActionTypes } from "./events.types";

export const setEventTypes = (events) => ({
  type: EventActionTypes.SET_EVENTS,
  payload: events,
});
