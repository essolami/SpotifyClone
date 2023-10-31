// import axios from 'axios';

export const fetchCategories = () => async (dispatch: Dispatch) => {
  try {
    console.log("Fetching categories");
    dispatch({
      type: "CATEGORIES_REQUEST",
    });
    const response = await fetch("my-api-endpoint");
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
