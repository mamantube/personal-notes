import React from "react";
import Header from "./Header";
import ContainerBody from "./Container";
import { getInitialData } from "../utils/data";

class PersonalNoteApp extends React.Component {
    constructor(props) {
        super(props);
        const notes = getInitialData();

        this.state = {
            notes: notes,
            querySearch: "",
        }

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onRemoveHandler = this.onRemoveHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onAddNoteEventHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        this.setState({notes: this.state.notes.filter((note) => note.id !== id )});
    }

    onArchiveHandler(id) {
        this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note,archived: true } : note) });
    }

    onRemoveHandler({ query }) {
        this.setState(() => {
            return { querySearch: query }
        });
    }

    onSearchEventHandler({ query }) {
        this.setState(() => {
            return { querySearch: query }
        });
    }

    render() {
        return (
            <>
                <Header searchNote={this.onSearchEventHandler} />
                <ContainerBody addNote={this.onAddNoteEventHandler} notes={this.state.notes} querySearch={this.state.querySearch} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onRemove={this.onRemoveHandler} />
            </>
        );
    }

}

export default PersonalNoteApp;