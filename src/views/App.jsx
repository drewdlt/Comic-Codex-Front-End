import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import SearchCharacter from "./SearchCharacter.jsx";
import DisplayCharacter from "./DisplayCharacter.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<SearchCharacter />} />
      <Route path="character" element={<DisplayCharacter />} />
    </Routes>
  );
}

export default App;
