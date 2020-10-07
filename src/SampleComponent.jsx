import React, { Component } from "react";
import { connect } from "react-redux";
class SampleComponent extends Component {
  render() {
    const { data } = this.props;
    return <div>Data from Reduc: {data}</div>;
  }
}

const mapState = (state) => ({
  data: state.test.data,
});
export default connect(mapState)(SampleComponent);
