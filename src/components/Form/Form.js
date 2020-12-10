import React, { Component } from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

export default class Form extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset() {
    this.setState({ name: "", number: "" });
  }

  render() {
    const { addContact } = this.props;
    const { name, number } = this.state;
    return (
      <div>
        <h2 className={styles.title}>Phonebook</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Enter the name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              type="text"
              name="number"
              placeholder="Enter the phone number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.button} onSubmit={addContact}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
