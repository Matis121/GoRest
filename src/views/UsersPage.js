import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./UsersPage.module.scss";
import { BsFillPersonFill } from "react-icons/bs";

import AddUserForm from "../components/AddUserForm";

const UsersPage = () => {
  // Assign data (users) to a variable

  const [users, setUsers] = useState();

  // This Hook is to open or close users form modal

  const [handleModal, setHandleModal] = useState(false);

  // Fetching data (users) from API

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/users")
      .then((res) => {
        const FetchData = res.data.data;
        console.log(res.data);
        setUsers(FetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={styles.addUser}>
        <button onClick={() => setHandleModal(true)}>Add User</button>
        {/* Function to hide/show the component*/}
        {handleModal === false ? null : (
          <AddUserForm
            openCloseModal={handleModal}
            closeModal={(handleModal) => setHandleModal(handleModal)}
          ></AddUserForm>
        )}
      </div>
      <div className={styles.users}>
        {users
          ? users.map((user) => (
              <div key={user.id}>
                <div className={styles.users__user}>
                  <h1>
                    <span className={styles.users__user__icon}>
                      <BsFillPersonFill />
                    </span>
                    {user.name}
                  </h1>
                  <p>
                    <span>E-mail:</span> {user.email}
                  </p>
                  <p>
                    <span>Gender:</span> {user.gender}
                  </p>
                  <p>
                    <span>Status:</span> {user.status}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default UsersPage;
