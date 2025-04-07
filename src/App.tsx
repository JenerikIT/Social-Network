import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
