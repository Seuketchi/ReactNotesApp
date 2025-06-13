import { Card, CardContent } from "@/components/ui/card";

const NoteItem = ({ note }) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4" space-y-2>
        <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>
        <p className="text-gray-600 mt-2">{note.content}</p>
      </CardContent>
    </Card>
  );
};

export default NoteItem;
