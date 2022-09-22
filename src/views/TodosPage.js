import React from "react";
import styles from "./TodosPage.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const TodosPage = () => {
  // Assign data (posts) to a variable

  const [todos, setTodos] = useState();

  // Fetching data (todos) from API

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/todos")
      .then((res) => {
        const FetchData = res.data.data;
        setTodos(FetchData);
        console.log(FetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.todos}>
        <div className={styles.todos__pending}>
          <div className={styles.todos__pending__title}>
            <h1>Pending</h1>
          </div>
          <div className={styles.todos__pending__todo}>
            {todos
              ? todos.map(function (todo) {
                  if (todo.status === "pending") {
                    return (
                      <div key={todo.id} className={styles.users}>
                        <div className={styles.users__user}>
                          <h1>{todo.title}</h1>
                          <p>
                            <span>Date:</span> {todo.due_on}
                          </p>
                        </div>
                      </div>
                    );
                  }
                })
              : null}
          </div>
        </div>
        <div className={styles.todos__completed}>
          <div className={styles.todos__completed__title}>
            <h1>Completed</h1>
          </div>
          <div className={styles.todos__completed__todo}>
            {todos
              ? todos.map(function (todo) {
                  if (todo.status === "completed") {
                    return (
                      <div key={todo.id} className={styles.users}>
                        <div className={styles.users__user}>
                          <h1>{todo.title}</h1>
                          <p>
                            <span>Date:</span> {todo.due_on}
                          </p>
                        </div>
                      </div>
                    );
                  }
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
