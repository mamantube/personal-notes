import React from "react";
import AddInput from "./AddNote";

function Header() {
    return (
        <header className="header">
            <h1 className="header-name">Maman Notes</h1>
            {/* <div className="seacrh-bar">
                <AddInput type="seacrh" placeholder="Cari Catatan..." value={search} onChange={setQuery} />
            </div> */}
        </header>
    );
}

export default Header;