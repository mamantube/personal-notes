import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteBody({title, body, createdAt}) {
    return (
        <div className="not-body">
            <h3 className="note-body__title">{title}</h3>
            <p className="note-body__body">{body}</p>
            <p className="note-body__date">{showFormattedDate(createdAt)}</p>
        </div>
    );
}

export default NoteBody;