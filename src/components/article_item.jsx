import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/article-item.css';

class ArticleItem extends React.Component {
  render() {
    let article = this.props.article;

    return (
      <li className='article-item'>
        <Link to={{
          pathname: `/articles/${article.id}`,
          state: {
            article: article
          }
        }}>
          <img className='article-thumbnail' src={article.thumbnail_url} alt='thumbnail' />
          <div className='article-text' id='article-title'>{article.card_title}</div>
          <div className='article-text' id='article-excerpt'>{article.excerpt}</div>
        </Link>
      </li>
    )
  }
}

export default ArticleItem;