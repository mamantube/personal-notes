import React from "react";

function RemoveButton({id, onRemove}) {
    return (
        <button className="note-item__remove" onClick={() => onRemove(id)}></button>
    )
}

export default RemoveButton;