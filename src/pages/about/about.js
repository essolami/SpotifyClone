import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { categoriesAction } from "../../redux/actions";

class About extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return <div>We are in About Page</div>;
  }
}
export const fecthData = () => {
  this.props.fetchCategories();
};
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(categoriesAction.fetchCategories()),
});
export default compose(withRouter, connect(null, mapDispatchToProps))(About);
