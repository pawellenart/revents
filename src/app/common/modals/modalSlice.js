const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';

export const modalOpen = (payload) => {
  return {
    type: MODAL_OPEN,
    payload,
  };
};

export const modalClose = () => {
  return {
    type: MODAL_CLOSE,
  };
};

const initialState = null;

export const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      const { modalType, modalProps } = payload;
      return { modalType, modalProps };
    case MODAL_CLOSE:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
