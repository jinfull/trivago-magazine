import React from 'react';

import './stylesheets/App.css';

import FeaturedArticle from './components/featured';
import ArticleItem from './components/article_item';
// import ArticleItemDetail from './components/article_item_detail';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => alert(error.message));
  }

  render() {
    if (!this.state.data) return null;

    let featured = this.state.data[0];

    console.log(this.state.data)

    let articles = this.state.data.slice(1).map(article => (
      <ArticleItem
        article={article}
        key={article.id}
      />
    ));

    return (
      <>
        <div>
          <FeaturedArticle article={featured} />
          <ul className="articles-ul">
            {articles}
          </ul>
        </div>
      </>
    );
  }
}
export default App;
