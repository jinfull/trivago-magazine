import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/featured.css';

class FeaturedArticle extends React.Component {
  render() {
    let article = this.props.article;

    return (
      <div className='featured-article-card'>
        <Link to={{
          pathname: `/articles/${article.id}`,
          state: {
            article: article
          }
        }}>
          <img className='featured-image' src={article.thumbnail_url} alt='featured cover' />
          <div className='overview-text'>
            <div id='featured-loc'>{article.taxonomies.destinations[0].name.toUpperCase()}</div>
            <div id='featured-title'>{article.card_title}</div>
            <div id='featured-excerpt'>{article.excerpt}</div>
            <div id='hero-button'>Read More</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default FeaturedArticle;