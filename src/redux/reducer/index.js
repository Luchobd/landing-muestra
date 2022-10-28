import { RENDER_CARDS, RENDER_ALBUM } from "../actions";

const initialState = {
  allPufi: [],
  albumPufi: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RENDER_CARDS:
      return {
        ...state,
        allPufi: action.payload,
      };
    case RENDER_ALBUM:
      return {
        ...state,
        albumPufi: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
