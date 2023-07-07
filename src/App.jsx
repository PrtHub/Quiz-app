import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components";
import { Favorite, Home, Quiz, Quizes } from "./pages";

const App = () => {
  return (
    <>
      <div className="app">
        <section className="app__sidebar">
          <Sidebar />
        </section>
        <section className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizes" element={<Quizes />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/fav" element={<Favorite />} />
          </Routes>
        </section>
      </div>
    </>
  );
};

export default App;
