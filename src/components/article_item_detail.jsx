import React from 'react';
import '../stylesheets/article-item-detail.css';
import RatingsBar from './ratings_bar';

class ArticleItemDetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let uri = this.props.location.state.article.uri;

    // fetch('https://cors-anywhere.herokuapp.com/' + `${uri}`)
    fetch(`${uri}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    if (!this.state.data) return null;

    let article = this.state.data;

    let hotels = article.content.filter(hotelObject => {
      if (hotelObject.type === 'hotel_module') {
        return hotelObject['hotel'];
      }
    });

    for (let i = 0; i < hotels.length; i++) {
      hotels[i] = (
        <a href={hotels[i]['hotel']['url']} key={hotels[i]['hotel']['id']} target='_blank' rel="noopener noreferrer">
          <li className='hotel-li' key={hotels[i]['hotel']['id']}>
            {i + 1}. {hotels[i]['hotel']['name']}
          </li>
        </a>
      )
    }

    return (
      <>
        <img className='featured-image' id='article-featured-image' src={article.thumbnail_url} alt='featured'></img>
        <div className='detail-container'>
          <div className='article-details'>
            <div className='article-detail-loc'>{article.taxonomies.destinations[0].name.toUpperCase()}</div>
            <div className='article-detail-title'>{article.title}</div>
            <div className='article-detail-text' dangerouslySetInnerHTML={{ __html: article['content'][0]['text'] }} />
            {/* <div className='article-detail-text' enctype='html/text'>{article['content'][0]['text']}</div> */}
          </div>
          <div className='article-side'>
            <div className='author'>
              <img className='author-avatar' src={article.author.image} alt='author avatar' />
              <div className='author-text'>
                <div className='author-title'>{article.author.name}</div>
                <div className='publish-date'>{article.date}</div>
              </div>
            </div>
            <RatingsBar articleId={article.id} />
            <div className='hotels'>Featured hotels</div>
            <ul className='hotel-ul'>
              {hotels}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default ArticleItemDetail;