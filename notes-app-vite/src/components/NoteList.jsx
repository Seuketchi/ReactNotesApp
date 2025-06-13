import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return (
      <p className="text-grey-500 text-center mt-10">No notes yet. Add one!</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
