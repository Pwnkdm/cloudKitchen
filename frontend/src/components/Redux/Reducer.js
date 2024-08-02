// reducers/cartReducer.js
const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        [action.payload.id]: (state[action.payload.id] || 0) + 1,
      };
    case 'REMOVE_FROM_CART':
      const { [action.payload.id]: _, ...rest } = state;
      return rest;
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        [action.payload.id]: state[action.payload.id] + 1,
      };
    case 'DECREASE_QUANTITY':
      if (state[action.payload.id] > 1) {
        return {
          ...state,
          [action.payload.id]: state[action.payload.id] - 1,
        };
      } else {
        const { [action.payload.id]: _, ...rest } = state;
        return rest;
      }
    default:
      return state;
  }
};

export default cartReducer;


