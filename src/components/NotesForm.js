import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';


const NotesForm = (props) => {
    
    const [text, setText] = useState('');
    function handleChange(e){
        setText(e.target.value);
    }

    const handleClick = () => {
        if(text !== ''){
            props.addNote(text);
            setText('')
        }
    }
    
    return(
        <div>
           <form className="notes-form">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Add note" onChange={handleChange} value={text} />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect(
    null,
    { addTodo }
)(NotesForm);