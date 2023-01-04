import React from 'react';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { positions } from '@mui/system';

function Header(){
    return <h1 className="main-header"><EventNoteIcon className="header-icon" sx={{ fontSize: 25}}/>Google Keep Clone</h1>;
}

export default Header;