import { useState } from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NewNote from "./components/NewNoteForm";
import NoteModal from "./components/NoteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleAddNote = (newNote) => {
    const noteWithId = {
      ...newNote,
      id: Math.random().toString(36).substring(2, 9), // random string like 'x2k3m9a'
    };
    setNotes([noteWithId, ...notes]);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const closeModal = () => {
    setSelectedNote(null);
  };

  const handleSaveNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    closeModal();
  };

  const handleDeleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <p className="text-gray-700">Welcome to your Notes App!</p>
        <NewNote onAddNote={handleAddNote} />
        <NoteList notes={notes} onNoteClick={handleNoteClick} />
      </main>

      {/* Reusable Modal Component */}
      <NoteModal
        note={selectedNote}
        onClose={closeModal}
        onSave={handleSaveNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export default App;
