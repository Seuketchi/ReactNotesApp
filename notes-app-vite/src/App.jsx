import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  const notes = [
    { title: "First Note", content: "This is the content of the first note." },
    {
      title: "Second Note",
      content: "This is the content of the second note.",
    },
    { title: "Third Note", content: "This is the content of the third note." },
    { title: "Third Note", content: "This is the content of the third note." },

    { title: "Third Note", content: "This is the content of the third note." },

    { title: "Third Note", content: "This is the content of the third note." },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <p className="text-gray-700">Welcome to your Notes App!</p>
        <NoteList notes={notes} />
      </main>
    </div>
  );
}

export default App;
