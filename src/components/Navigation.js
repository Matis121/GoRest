import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <header className={styles.navbar}>
        <h1>
          <Link to="/">Go Rest</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
