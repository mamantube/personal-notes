import React from "react";

function NoteBody({title, body, date}) {
    return (
        <div className="not-body">
            <h3 className="note-body__title">{title}</h3>
            <p className="note-body__body">{body}</p>
            <p className="note-body__date">{date}</p>
        </div>
    );
}

export default NoteBody;