import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, Dispatch } from "redux";
import { categoriesAction } from "../../redux/actions";

type AboutProps = {
  fetchCategories: any;
};

class About extends Component<AboutProps> {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return <div>We are in About Page</div>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCategories: () => dispatch(categoriesAction.fetchCategories()),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(About);
