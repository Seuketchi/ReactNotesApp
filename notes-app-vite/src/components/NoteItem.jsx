import { Card, CardContent } from "@/components/ui/card";

const NoteItem = ({ note, onClick }) => {
  return (
    <Card
      onClick={() => onClick(note)}
      className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <CardContent className="p-4 space-y-2">
        <h3 className="font-bold text-lg mb-1">{note.title}</h3>
        <p className="text-gray-600 line-clamp-3">{note.content}</p>
      </CardContent>
    </Card>
  );
};

export default NoteItem;
