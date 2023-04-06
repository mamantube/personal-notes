import React from "react";
import NoteBody from "./NoteBody";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/data";

function NotItems({id, title, body, createdAt, onArchive, onDelete, onRemove, archived }) {
    return (
        <div className="note-item__container">
            <div className="note-item__content">
                <NoteBody title={title} body={body} createdAt={showFormattedDate(createdAt)} />               
            </div>
            <div className="note-item__button">
                <ArchiveButton id={id} onArchive={onArchive} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default NotItems