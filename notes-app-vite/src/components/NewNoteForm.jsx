import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const NewNote = ({ onAddNote }) => {
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (content.trim()) {
      onAddNote({ content });
      setContent("");
    }
  };

  return (
    <div className="new-note">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your note here..."
      />
      <Button onClick={handleAddNote}>Add Note</Button>
    </div>
  );
};
export default NewNote;
