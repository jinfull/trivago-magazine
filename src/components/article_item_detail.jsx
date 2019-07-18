import React from 'react';
// import '../stylesheets/article-item.css';

class ArticleItemDetail extends React.Component {
  constructor() {
    super();
  }
  render() {
    let article = this.props.location.state.article;

    console.log(article);

    return (
      <div>{article.uri}</div>
    )
  }
}

export default ArticleItemDetail;