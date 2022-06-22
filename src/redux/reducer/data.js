import { DELETEDATA, FETCHDATA } from "../actionType";

const init_state = {
  data: []
};

export const dataReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case FETCHDATA:
      return {
        ...state,
        data: payload
      };
    case DELETEDATA:
      return {
        ...state,
        data: deleteData(state.data, payload)
      };

    default:
      return state;
  }
};

const deleteData = (data, key) => {
  return data.filter((user) => user.id !== key.id);
};
