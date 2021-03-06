import { ADD_DATA_TO_ORDER } from "../../consts/order";

const initialState = {
  dataArray: [{ b: {}, s: {} }]
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_TO_ORDER:
      if (state.dataArray.length > 4) {
        return {
          ...state, 
          dataArray: [...action.payload, ...state.dataArray.slice(0,4)]
        };
      } else {
        return { ...state, dataArray: [...action.payload, ...state.dataArray] };
      }
    default:
      return state;
  }
};
