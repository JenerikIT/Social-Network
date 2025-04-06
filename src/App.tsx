import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
