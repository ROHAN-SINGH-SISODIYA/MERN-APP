import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import Create from './components/Create';
import Edit from './components/Edit';
import Index from './components/Index';

class App extends Component{
  render(){
    return(
         <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg nvabar-dark bg-dark">
                <Link to={'/'} className="navbar-brand">React CRUD APP</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to={'/'} className="nav-link">HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/create'} className="nav-link">CREATE</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/index'} className="nav-link">INDEX</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <br />
              <h2>Welcome to React Crud App</h2>
              <Switch>
                <Route exact path='/create' component={Create} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/index' component={Index} />
              </Switch>
            </div>
         </Router>
    );
  }
}
export default App;