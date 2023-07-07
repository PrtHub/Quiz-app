import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components";
import { Home, Quiz, Quizes } from "./pages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          </Routes>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default App;
