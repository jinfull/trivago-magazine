import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/featured.css';

class FeaturedArticle extends React.Component {
  render() {
    let featured = this.props.featured;

    return (
      <div className='featured-article-card'>
        <Link to={{
          pathname: `/articles/${featured.id}`,
          state: {
            article: featured
          }
        }}>
          <img className='featured-image' src={featured.thumbnail_url} alt='featured cover' />
          <div className='overview-text'>
            <div id='featured-loc'>{featured.taxonomies.destinations[0].name.toUpperCase()}</div>
            <div id='featured-title'>{featured.card_title}</div>
            <div id='featured-excerpt'>{featured.excerpt}</div>
            <div id='hero-button'>Read More</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default FeaturedArticle;