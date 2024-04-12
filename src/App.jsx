import React from "react";
import List from "./components/List";
import styles from "./App.module.css";

const App = () => {
  return (
    <List text="text">
      <div className={styles.item}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
    </List>
  );
};

export default App;
