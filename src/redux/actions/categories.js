// import axios from 'axios';

// import config from '../config';
// import type { Dispatch, ThunkAction, ReduxState, GetState } from '../types';
// import { getSiteHandle } from '../utils/siteLocale';
// import categoriesQuery from '../_env-config/queries/artistCategories';

export const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: "CATEGORIES_SUCCESS",
    data: {
      love: "kipop",
      like: "bts",
    },
  });
  //   const handle = getSiteHandle();
  //   const headers = {
  //     Authorization: `Bearer ${config.BAM_CRAFT_API_KEY}`,
  //     'Content-Type': 'application/graphql'
  //   };
  //   try {
  //     const { data } = await axios({
  //       url: `${config.API_URL_V2}`,
  //       method: 'POST',
  //       data: categoriesQuery(handle),
  //       headers
  //     });
  //     const {
  //       data: { categories }
  //     } = data;
  //     dispatch({
  //       type: 'CATEGORIES_SUCCESS',
  //       data: categories
  //     });
  //   } catch (err) {
  //     dispatch({ type: 'CATEGORIES_FAILURE', err: err.message });
  //   }
};
