import React, { useState } from 'react';

import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
// import staticNote from "../notes.js";
import CreateArea from "./CreateArea.jsx";


function App(){
    
    const[notesList, setNotesList] = useState([]);

    function addNote(note){
        setNotesList((prevNotes) => {
            return [...prevNotes, note];
        });
    }

    function removeNote(id){
        setNotesList((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {/* <Note 
                key={staticNote.key} 
                title={staticNote.title}
                content={staticNote.content}
                onDelete={removeNote}
            /> */}
            {notesList.map((noteItem, index) => 
                <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={removeNote}
                />
                )
            }
            <Footer />
        </div>
    );
    // add components here
}

export default App;