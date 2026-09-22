import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Create from "./pages/Create";
import History from "./pages/History";
import Profile from "./pages/Profile";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Common Navbar Layout */}
        <Route element={<Navbar />}>

          <Route path="/" element={<Home />} />

          <Route path="/create" element={<Create />} />

          <Route path="/history" element={<History />} />
<Route path="/profile" element={<Profile />} />
     

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;