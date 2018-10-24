const initialState = {
    name: '',
};

const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    payload: input
  };
};

export default function reducer(state = initialState, action) {
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
