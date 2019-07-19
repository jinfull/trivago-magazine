import React from 'react';
import '../stylesheets/article-item-detail.css';

class ArticleItemDetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let uri = this.props.location.state.article.uri;

    fetch(`${uri}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    if (!this.state.data) return null;

    let article = this.state.data;

    return (
      <>
        <img className='featured-image' src={article.thumbnail_url}></img>
        <div className='detail-container'>
          <div className='article-details'>
            <div className='article-detail-loc'>{article.taxonomies.destinations[0].name.toUpperCase()}</div>
            <div className='article-detail-title'>{article.title}</div>
            {/* <div className='article-detail-text' dangerouslySetInnerHTML={{ __html: article['content'][0]['text'] }} /> */}
            <div className='article-detail-text'>{article['content'][0]['text']}</div>
          </div>
          <div className='article-side'>
            <div className='author'>
              <img className='author-avatar' src={article.author.image} />
              <div className='author-text'>
                <div className='author-title'>{article.author.name}</div>
                <div className='publish-date'>{article.date}</div>
              </div>
            </div>
            <div className='rating'>RATING MECHANISM HERE</div>
            <div className='hotels'>hotels here</div>
          </div>
        </div>
      </>
    )
  }
}

export default ArticleItemDetail;