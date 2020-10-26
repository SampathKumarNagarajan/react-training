import React from 'react';


const Note = ({title, deleteNote}) => {

    const handleDelete = (note) => {
        deleteNote(note);
    }

    return (
        <div className="note">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            {title}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-danger deltebutton" onClick={() => handleDelete(title)}>x</button>
                </div>
            </div>
        </div>
    )
}

export default Note;