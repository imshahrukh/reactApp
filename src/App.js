import "./App.css";
import "./style/auth.css";
import "./style/normalize.css";
import "./style/fonts.css";
import "./style/variables.css";
import "./style/text.css";
import "./style/base.css";
import "./style/home.css";
import "./style/header.css";
import "./style/top-bar.css";
import "./style/footer.css";
import "./style/inputs.css";
import "./style/burger-menu.css";
import "./style/media-queries.css";
import "./style/payments.css";
import "./style/select.css";
import "./style/pay.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BodyHolder,
  Homepage,
  Search,
  Login,
  HiringStep,
  Registration,
  User,
  Images,
} from "./pages/pages";
const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="user" element={<BodyHolder />}>
            <Route path="home" element={<Homepage />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="hiring" element={<HiringStep />}></Route>
            <Route path="registration" element={<Registration />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="images" element={<Images />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
