import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemPage from './components/ItemPage/ItemPage';
import Home from './components/Home';

ReactDOM.render(
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/items" component={Home} />
            <Route exact path="/items/:id" component={ItemPage} />
        </Switch>
    </Router>,
    document.querySelector('#root')
);