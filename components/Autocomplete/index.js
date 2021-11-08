import React from "react";
import Select from "react-select";

class MySelect extends React.Component {
  render() {
    return (
      <Select
        value={this.props.selected}
        onChange={this.props.onChange}
        options={this.props.options}
      />
    );
  }
}

export default MySelect;