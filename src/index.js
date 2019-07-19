import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './stylesheets/index.css';
import App from './App';
import ArticleItemDetail from './components/article_item_detail';
import Header from './components/header';
import Footer from './components/footer';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Route component= {Header} />
    <Switch>
      <Route path="/articles/:id" component={ArticleItemDetail} />
      <Route exact path="/" component={App} />
    </Switch>
    <Route component= {Footer} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
