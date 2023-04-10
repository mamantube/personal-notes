import React from "react";

class AddInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            maxChar: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.maxChar),
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: "",
                body: "",
            }
        });
    }

    render() {
        return (
            <div className="note-input">
                <form action="" className="input-note" onSubmit={this.onSubmitEventHandler}>
                    <p className="input-title__char">Sisa Karakter: {this.state.maxChar - this.state.length}</p>
                    <input type="text" className="input-title" placeholder="Masukkan Judul Maksimal 50 Karakter" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea cols="30" rows="10" className="input-body" placeholder="Tulis Catatanmu..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>                    <button type="submit">Simpan Catatan</button>
                </form>
            </div>
            
        )
    }
}

export default AddInput;