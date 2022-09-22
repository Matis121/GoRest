import styles from "./App.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersPage from "./views/UsersPage";
import PostsPage from "./views/PostsPage";
import TodosPage from "./views/TodosPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" exact element={<UsersPage />}></Route>
          <Route path="/GoRest" element={<UsersPage />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
          <Route path="/todos" element={<TodosPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
