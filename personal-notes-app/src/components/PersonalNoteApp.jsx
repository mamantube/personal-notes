import React from "react";
import Header from "./Header";
import NoteList from "./NoteList";
import AddInput from "./AddNote";
import { getInitialData } from "../utils/data";

class PersonalNoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:getInitialData(),
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onAddNoteHandler({title})

}