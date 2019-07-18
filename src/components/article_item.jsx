import React from 'react';
import '../stylesheets/article-item.css';

class ArticleItem extends React.Component {
  render() {
    let article = this.props.article;

    console.log(article);

    return (
        <a href='http://google.com' className='article-item'>
          <img className='article-thumbnail' src={article.thumbnail_url} />
          <div className='article-text' id='article-title'>{article.card_title}</div>
          <div className='article-text' id='article-excerpt'>{article.excerpt}</div>
        </a>
    )
  }
}

export default ArticleItem;