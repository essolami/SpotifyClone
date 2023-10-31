import React, { useEffect } from "react";
import { fetchCategories } from "../../redux/actions/categories";
import { useDispatch } from "react-redux";

export type Props = {
  fetchCategories: () => ThunkAction;
};

function About(props: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [props, dispatch]);

  return <div>We are in About Page</div>;
}
export default About;
