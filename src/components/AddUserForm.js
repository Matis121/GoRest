import React, { Component } from "react";
import styles from "./AddUserForm.module.scss";
import axios from "axios";

export class AddUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      email: "",
      gender: "",
      status: "active",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://gorest.co.in/public/v1/users?access-token=e6022a1f29796089d2ddea39eaf9b7433a6953620212a7ac08cb818ef969cf3c",
        this.state
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name, email, gender } = this.state;
    return (
      <div
        className={
          this.props.openCloseModal === true
            ? styles.wrapper
            : styles.wrapper__notActive
        }
      >
        <div className={styles.form}>
          <div className={styles.form__exit}>
            <button onClick={() => this.props.closeModal(false)}>X</button>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className={styles.form__name}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>

              <div className={styles.form__email}>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>

              <div className={styles.form__gender}>
                <label>Gender (male / female)</label>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUserForm;
