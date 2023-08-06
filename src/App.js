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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/movie/documentary" element={<Documentary />} />
          <Route path="/movie/action" element={<Action />} />
          <Route path="/movie/biography" element={<Biography />} />
          <Route path="/movie/drama" element={<Drama />} />
          <Route path="/movie/music" element={<Music />} />
          <Route path="/movie/mystery" element={<Mystery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
