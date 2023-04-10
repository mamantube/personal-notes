import React from "react";
import AddInput from "./AddNote";
import NoteList from "./NoteList";


function ContainerBody({addNote, notes, onArchive, onDelete, onRemove, querySearch}) {
    const activeNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));
    const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));

    return (
        <div className="note-app__body">
            <AddInput addNote={addNote} />
            <h2>Catatanmu</h2>
            <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
            <h2>Catatan Yang Diarsipkan</h2>
            <NoteList notes={archiveNotes} onDelete={onDelete} onRemove={onRemove} />
        </div>
    );
}

export default ContainerBody;