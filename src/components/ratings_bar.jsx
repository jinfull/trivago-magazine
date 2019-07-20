import React from 'react';
import Ratings from 'react-ratings-declarative';
import firebase from '../firebase';

class RatingsBar extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.changeRating = this.changeRating.bind(this);

    // let articleId = this.props.articleId;
  }

  changeRating(newRating) {
    let articleId = this.props.articleId;

    firebase.database().ref('/' + articleId).push({
      articleId: articleId,
      rating: newRating
    });

    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
      <Ratings
        className='ratingsbar'
        rating={this.state.rating}
        widgetSpacings='2px'
        widgetRatedColors="gold"
        changeRating={this.changeRating}
      >
        <Ratings.Widget widgetDimension='35px'/>
        <Ratings.Widget widgetDimension='35px'/>
        <Ratings.Widget widgetDimension='35px'/>
        <Ratings.Widget widgetDimension='35px'/>
        <Ratings.Widget widgetDimension='35px'/>
      </Ratings>
    );
  }
}

export default RatingsBar;