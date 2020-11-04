import React from 'react';
import Form from './NotesForm';
import Note from './Note';
import { connect } from 'react-redux';
import { getTodo, addTodo, deleteTodo } from '../../redux/actions/NoteActions.js';
class NotesApp extends React.Component {

  constructor() {
    super();
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.headerTitle = 'React Notes';
  }

  componentDidMount() {
    this.props.getTodo();
  }

  addNote = (note) => {
    this.props.addTodo(note);
  }

  deleteNote = (noteToDelete) => {
    this.props.deleteTodo(noteToDelete)
  }

  render() {
    return (
      <div>
        <Form addNote={this.addNote}/>
        {(this.props.notes.length > 0) ? this.props.notes.map((note)=>(
                <Note title={note} deleteNote={this.deleteNote}/>
        )) : 'No notes found'
        }
      </div>
    );
  }
}
const mapDispatchToProps = { getTodo, addTodo, deleteTodo };
const mapStateToProps = (state) => {
  return {
    notes: state.Notes.notes
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);

