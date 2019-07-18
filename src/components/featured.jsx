import React from 'react';

class FeaturedArticle extends React.Component {
  render() {
    let featured = this.props.featured;

    return (
      <a href='http://google.com' className='featured-article-card'>
        <img className='featured-image' src={featured.thumbnail_url} />
        <div>{featured.card_title}</div>
      </a>
    )
  }
}

export default FeaturedArticle;