const initialState = {
    readyStatus: 'CATEGORIES_INVALID',
    err: null,
    content: []
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CATEGORIES_REQUESTING': {
        return {
          ...state,
          readyStatus: 'CATEGORIES_REQUESTING'
        };
      }
      case 'CATEGORIES_FAILURE': {
        return {
          ...state,
          readyStatus: 'CATEGORIES_FAILURE',
          err: action.err
        };
      }
      case 'CATEGORIES_SUCCESS': {
        return {
          ...state,
          readyStatus: 'CATEGORIES_SUCCESS',
          content: action.data
        };
      }
      default:
        return state;
    }
  };
  export default categoriesReducer
  