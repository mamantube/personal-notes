import React from "react";
import SearchBar from "./SearchBar";

function Header({ searchNote }) {
    return (
        <header className="header">
            <h1 className="header-name">Maman Notes</h1>
            <SearchBar searchNote={searchNote} />
        </header>
    );
}

export default Header;