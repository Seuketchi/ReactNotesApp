const NoteItem = ({ note }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h2 className="text-xl font-semibold text-blue-700">{note.title}</h2>
      <p className="text-gray-700 mt-2">{note.content}</p>
    </div>
  );
};

export default NoteItem;
