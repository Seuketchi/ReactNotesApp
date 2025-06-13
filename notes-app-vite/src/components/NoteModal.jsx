import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const NoteModal = ({ note, onClose, onSave, onDelete }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setContent(note.content || "");
    } else {
      setTitle("");
      setContent("");
    }
  }, [note]);
  const handleSave = () => {
    onSave({ ...note, title, content });
  };

  const handleDelete = () => {
    if (note?.id) {
      if (window.confirm("Are you sure you want to delete this note?")) {
        onDelete(note.id);
      }
    }
  };
  return (
    <Dialog open={!!note} onOpenChange={onClose}>
      <DialogContent
        className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
        style={{
          width: "fit-content",
          maxWidth: "90vw",
          height: "fit-content",
          maxHeight: "90vh",
          overflowY: "auto",
          wordWrap: "break-word",
        }}
      >
        <DialogHeader>
          <DialogTitle>
            {" "}
            <Input
              className="w-full text-lg font-medium border-none outline-none bg-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </DialogTitle>
        </DialogHeader>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="mt-4 w-full text-gray-700 border-none resize-none outline-none bg-transparent"
          rows={1}
          style={{
            width: "100%",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-200"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-200"
          onClick={handleDelete}
        >
          Delete
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default NoteModal;
