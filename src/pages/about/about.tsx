import { useEffect } from "react";
import { fetchCategories } from "../../redux/actions/categories";
import { useDispatch } from "react-redux";

function About() {
  // Get the dispatch function
  const dispatch: Dispatch = useDispatch();

  // Use the useEffect hook to fetch categories when the component mounts
  useEffect(() => {
    // Dispatch the fetchCategories action
    dispatch(fetchCategories());
  }, [dispatch]);

  return <div>We are in About Page</div>;
}

export default About;
