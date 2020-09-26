const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log({ ...state, currentUser: action.payload });
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      console.log(state);
      return state;
  }
};

export default userReducer;
