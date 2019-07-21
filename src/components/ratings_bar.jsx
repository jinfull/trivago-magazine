import React from 'react';
import Ratings from 'react-ratings-declarative';
import firebase from '../firebase';

class RatingsBar extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.changeRating = this.changeRating.bind(this);
    // this.articleRating = this.articleRating.bind(this);
  }

  changeRating(newRating) {
    let articleId = this.props.articleId;

    firebase.database().ref().push({
      articleId: articleId,
      rating: newRating
    });

    this.setState({
      rating: newRating
    });

    // this.articleRating();

  }

  // articleRating() {
  //   let articleId = this.props.articleId;

  //   firebase.database().ref().on("value", function(snapshot) {
  //     console.log(snapshot.val());
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // }

  render() {
    return (
      <>
        <div className='hotels'>Rate this article!</div>
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
      </>
    );
  }
}

export default RatingsBar;