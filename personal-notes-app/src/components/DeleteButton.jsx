import React from "react";

function DeleteButton ({onDelete, id}) {
    return <button className="delete-button" onClick={() => onDelete(id)}>Hapus Catatan</button>
}

export default DeleteButton;