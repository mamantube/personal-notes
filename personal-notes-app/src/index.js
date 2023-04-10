import React from "react";
import { createRoot } from "react-dom/client"
import PersonalNoteApp from "./components/PersonalNoteApp";
import "./style/stlyes.css";

const root = createRoot(document.getElementById("root"));
root.render(<PersonalNoteApp />)