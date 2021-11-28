import { sampleData } from '../../app/api/sampleData';

const CREATE_EVENT = 'CREATE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';

const initialState = {
  events: sampleData,
};

const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((evt) => evt.id !== payload.id),
          payload,
        ],
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== payload)],
      };
    default:
      return state;
  }
};

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};

export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};

export default eventReducer;
