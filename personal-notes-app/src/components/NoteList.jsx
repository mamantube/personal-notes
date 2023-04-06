import React from "react";
import NotItems from "./NoteItems";

function NoteList({notes, onAchive, onDelete}) {
    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NotItems key={note.id} id={note.id} onArchive={onAchive} onDelete={onDelete} {...note} />
                )
            )}
        </div>
    );
}

export default NoteList;