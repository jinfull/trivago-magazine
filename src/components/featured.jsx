import React from 'react';
import '../stylesheets/featured.css';

class FeaturedArticle extends React.Component {
  render() {
    let featured = this.props.featured;

    return (
      <a href='http://google.com' className='featured-article-card'>
        <img className='featured-image' src={featured.thumbnail_url} />
        <div className='overview-text'>
          <div id='featured-loc'>{featured.taxonomies.destinations[0].name.toUpperCase()}</div>
          <div id='featured-title'>{featured.card_title}</div>
          <div id='hero-button'>Read More</div>
        </div>
      </a>
    )
  }
}

export default FeaturedArticle;