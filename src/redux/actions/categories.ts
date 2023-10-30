// import axios from 'axios';

export const fetchCategories = (): ThunkAction => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: "CATEGORIES_REQUEST",
    });

    try {
      // Simulate an API call (replace with your actual API request)
      const response = await fetch("your-api-endpoint");
      const data = await response.json();

      dispatch({
        type: "CATEGORIES_SUCCESS",
        data: data,
      });
    } catch (error) {
      dispatch({
        type: "CATEGORIES_FAILURE",
        err: "error.message",
      });
    }
  };
};
