import React, { Component, Fragment } from "react";

import Select from "react-select";

export default class SingleSelect extends Component {
  render() {
    const { options, ref, placeholder, name, onChange } = this.props;
    return (
      <Fragment>
        <Select
          className=""
          placeholder={placeholder}
          name={name}
          ref={ref}
          options={options}
          onChange={onChange}
        />
      </Fragment>
    );
  }
}
