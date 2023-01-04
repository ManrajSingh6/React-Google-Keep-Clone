import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";

function CreateArea(props){

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevNote) => {
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function confirmNote(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({title: "", content:""});
    }

    

    return (
        <div>
          <form>
            {isExpanded ? <input name="title" placeholder="Title" value ={note.title} onChange={handleChange}/> : null}
            <textarea name="content" 
                placeholder="Take a note..." 
                rows={isExpanded ? 3 : 1} value ={note.content} 
                onChange={handleChange} 
                onClick={() => setExpanded(true)} 
            />
            <Zoom in={isExpanded ? true : false}>
                <button onClick={confirmNote}><AddIcon className="add-icon"/></button>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateArea;