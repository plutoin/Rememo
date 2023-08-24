import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppSelector } from "./hooks/redux";

import {
  AllNotes,
  ArchiveNotes,
  TrashNotes,
  TagNotes,
  ErrorPage,
} from "./pages";
import { Navbar, Sidebar } from "./layout";

import { CreateNoteModal } from "./components";
import TagsModal from "./components/Modal/TagsModal/TagsModal";

import "./App.css";

function App() {
  const { viewCreateNoteModal, viewEditTagsModal } = useAppSelector(
    (state) => state.modal
  );

  return (
    <div className="app">
      {viewEditTagsModal && <TagsModal type="edit" />}
      {viewCreateNoteModal && <CreateNoteModal />}

      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
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
