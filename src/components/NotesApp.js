import React from 'react';
import Form from './NotesForm';
import Note from './Note';
import { connect } from 'react-redux';
import { getTodo } from './reducers/actions.js';
class NotesApp extends React.Component {

  constructor() {
    super();
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.headerTitle = 'React Notes';
  }

  addNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  deleteNote = (noteToDelete) => {
    let updatedList = this.state.notes.filter( (note)=> {
      return note !== noteToDelete
    })
    this.setState({
      notes: updatedList
    })
  }

  render() {
    return (
      <div>
        <Form addNote={this.addNote}/>
        {(this.state.notes.length > 0) ? this.state.notes.map((note)=>(
                <Note title={note} deleteNote={this.deleteNote}/>
        )) : 'No notes found'
        }
      </div>
    );
  }
}
const mapDispatchToProps = { getTodo };
const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesApp);
