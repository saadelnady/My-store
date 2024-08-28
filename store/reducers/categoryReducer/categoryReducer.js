import { GET_CATEGORIES_SUCCESS } from "@/store/actions/actionsTypes";

// redux/reducers/someReducer.js
const initialState = {
  categories: [],
  category: {},
  isLoading: false,
  error: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payLoad,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    default:
      return state;
  }
}
