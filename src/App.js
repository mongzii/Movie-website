import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import Documentary from "./category/Documentary";
import Action from "./category/Action";
import Music from "./category/Music";
import Biography from "./category/Biography";
import Drama from "./category/Drama";
import Mystery from "./category/Mystery";

// import Movie from "./components/Movie";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route
            path={process.env.PUBLIC_URL + "/movie/:id"}
            element={<Detail />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/movie/documentary"}
            element={<Documentary />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/movie/action"}
            element={<Action />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/movie/biography"}
            element={<Biography />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/movie/drama"}
            element={<Drama />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/movie/music"}
            element={<Music />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/movie/mystery"}
            element={<Mystery />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
