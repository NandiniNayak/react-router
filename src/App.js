import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Link} from "react-router-dom";
import CategorySelection from './components/CategorySelection';
import NewEntry from './components/NewEntry';
import HomePage from './components/HomePage';

class App extends Component {
  state={
    categories: ["Food", "Thoughts", "Other"]
  }
  render(){
    const {categories} = this.state
    return (
      <div className="App">
        {/* react router dom package BrowserRouter allows us to nest different routes  */}
        <BrowserRouter>
          <Link to="/"><button>HOME</button></Link>
          <Link to="/category"><button>Category</button></Link>
          <Link to="/new"><button>New Entry</button></Link>
           <Route exact path="/" component={HomePage} />
           <Route exact path="/category" 
          //  render takes a function thats passes props to child component
                render={props => <CategorySelection categories={categories} {...props} />}
           />
           <Route exact path="/new/:id" 
            render={props => <NewEntry categories={categories} {...props} />}
           />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
