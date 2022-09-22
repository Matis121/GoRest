import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./PostsPage.module.scss";

import { BsPersonCircle } from "react-icons/bs";
import AddPostForm from "../components/AddPostForm";

const PostsPage = () => {
  // Assign data (posts) to a variable

  const [posts, setPosts] = useState();

  // Assign data (comments) to a variable

  const [comments, setComments] = useState();

  // This Hook is to open or close posts form modal

  const [handlePostModal, setHandlePostModal] = useState(false);

  // Fetching data (posts) from API

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/posts")
      .then((res) => {
        const FetchData = res.data.data;
        console.log(FetchData);
        setPosts(FetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Fetching data (comments) from API

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/comments")
      .then((res) => {
        const FetchData = res.data.data;
        setComments(FetchData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.addPost}>
        <div className={styles.addPost__button}>
          <button onClick={() => setHandlePostModal(true)}>Add Post</button>
        </div>
        {/* Function to hide/show the component*/}
        {handlePostModal === false ? null : (
          <AddPostForm
            openClosePostModal={handlePostModal}
            closePostModal={(handlePostModal) =>
              setHandlePostModal(handlePostModal)
            }
          ></AddPostForm>
        )}
      </div>
      <div className={styles.posts}>
        {posts
          ? posts.map((post) => (
              <div key={post.id}>
                <div className={styles.posts__post}>
                  <h1>{post.title}</h1>
                  <p> {post.body}</p>
                  {comments
                    ? comments.map(function (comment) {
                        if (comment.post_id === post.id) {
                          return (
                            <div
                              className={styles.posts__post__comment}
                              key={comment.id}
                            >
                              <div
                                className={styles.posts__post__comment__icon}
                              >
                                <BsPersonCircle />
                              </div>
                              <div
                                className={styles.posts__post__comment__info}
                              >
                                <h2>{comment.name}</h2>
                                <p
                                  className={
                                    styles.posts__post__comment__info__comment
                                  }
                                >
                                  {comment.body}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      })
                    : null}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default PostsPage;
