import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  AllNotes,
  ArchiveNotes,
  TrashNotes,
  TagNotes,
  ErrorPage,
} from "./pages";
import { Navbar, Sidebar } from "./layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<TagNotes />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to={"/404"} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
