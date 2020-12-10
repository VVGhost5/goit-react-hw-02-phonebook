import React, { Component } from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

export default class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
  };

  render() {
    const { value, onChange } = this.props;

    return (
      <label>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          placeholder="Find contact"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    );
  }
}
