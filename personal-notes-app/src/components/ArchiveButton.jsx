import React from "react";

function ArchiveButton({onArchive, id}) {
    return <button className="archive-button" onClick={() => onArchive(id)}>Arsipkan Catatan</button>
}

export default ArchiveButton;