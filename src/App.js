import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotesApp from './components/NotesApp';
import ImageGalleryApp from './components/ImageGalleryApp';

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
                </div>
            </div>
            <div className="item">
              <div className="container">
                <Switch>
                  <Route exact path='/' component={NotesApp}/>
                  <Route exact path='/gallery' component={ImageGalleryApp}/>
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
