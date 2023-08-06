import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import Documentary from "./category/Documentary";

// import Movie from "./components/Movie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/movie" element={<Movie />} /> */}
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/movie/documentary" element={<Documentary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
