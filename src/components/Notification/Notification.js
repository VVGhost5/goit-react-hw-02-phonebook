import React, { Component } from "react";
import styles from "./Notification.module.css";

export default class Notification extends Component {
  render() {
    return <p className={styles.notification}>You haven't contacts</p>;
  }
}
