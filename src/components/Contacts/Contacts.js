import React, { Component } from "react";
import styles from "./Contacts.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export default class Contacts extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const { contacts, onDelete, children } = this.props;
    return (
      <div>
        <ul className={styles.list}>
          {contacts.map((el) => (
            <li className={styles.item} key={uuidv4()}>
              {`${el.name}: ${el.number}`}
              <button
                className={styles.button}
                onClick={() => {
                  onDelete(el.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  }
}
