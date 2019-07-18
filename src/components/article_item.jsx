import React from 'react';

class ArticleItem extends React.Component {
  render() {
    let article = this.props.article;

    console.log(article);

    return (
      <a href='http://google.com' className='article-card'>
        <img className='article-thumbnail' src={article.thumbnail_url} />
        <div>{article.card_title}</div>
        <div>{article.excerpt}</div>
      </a>
    )
  }
}

export default ArticleItem;