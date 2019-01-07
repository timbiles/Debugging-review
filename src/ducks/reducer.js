const initialState = {
    name = '',
};

const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = input => {
  return {
    action: UPDATE_INPUT,
    payload: input
  };
};

export default function reducer(initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    default:
      return state;
  }
}
