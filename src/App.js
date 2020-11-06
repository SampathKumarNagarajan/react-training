import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotesApp from './components/NotesApp/NotesApp';
import ImageGalleryApp from './components/ImageGalleryApp/ImageGalleryApp';
import UserProfileApp from './components/UserProfileApp/UserProfileApp';
import MusicPlayerApp from './components/MusicPlayerApp/MusicPlayerApp';

class App extends React.Component {

  constructor(){
    super();
    this.headerTitle = 'React Training';
  }
  
  render() {
    return (
      <div>
        <Router>
          <Navbar title={this.headerTitle}/>
          <div className="app-layout">
            <div className="item left-panel">
                <div className="vertical-menu">
                    <Link to="/">React Notes</Link>
                    <Link to="/gallery">React Image Gallery</Link>
                    <Link to="/user">React User Profile</Link>
                    <Link to="/music_player">React Music player</Link>
                </div>
            </div>
            <div className="item">
              <div className="container">
                <Switch>
                  <Route exact path='/' component={NotesApp}/>
                  <Route exact path='/gallery' component={ImageGalleryApp}/>
                  <Route exact path='/user' component={UserProfileApp}/>
                  <Route exact path='/music_player' component={MusicPlayerApp}/>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
