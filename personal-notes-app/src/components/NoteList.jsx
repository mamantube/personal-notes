import React from "react";
import NotItems from "./NoteItems";

function NoteList({notes, onArchive, onDelete, onRemove}) {
    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NotItems key={note.id} id={note.id} onArchive={onArchive} onDelete={onDelete} onRemove={onRemove} {...note} />
                )
            )}
        </div>
    );
}

export default NoteList;