import React, { Component, useEffect } from "react";
import styles from "./AddPostForm.module.scss";
import axios from "axios";

export class AddPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      user_id: "",
      title: "",
      body: "",
    };
  }

  // Assigning a value to this.state

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Posting data to Rest API

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://gorest.co.in/public/v1/users/36/posts?access-token=e6022a1f29796089d2ddea39eaf9b7433a6953620212a7ac08cb818ef969cf3c",
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
    const { title, body } = this.state;
    return (
      <div
        className={
          this.props.openClosePostModal === true
            ? styles.wrapper
            : styles.wrapper__notActive
        }
      >
        <div className={styles.form}>
          <div className={styles.form__exit}>
            <button onClick={() => this.props.closePostModal(false)}>X</button>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className={styles.form__name}>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>

              <div className={styles.form__email}>
                <label>Body</label>
                <textarea
                  className={styles.form__email__textArea}
                  name="body"
                  value={body}
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

export default AddPostForm;
