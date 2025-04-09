import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSidebar from "./components/sections/ProfileSidebar/ProfileSidebar";
import Favourite from "./components/sections/Favourite/Favourite";

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <main className="main">
        <div className="main-container">
          <ProfileSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
