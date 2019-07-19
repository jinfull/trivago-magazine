import React from 'react';
import Ratings from 'react-ratings-declarative';

class RatingsBar extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    console.log(this.state);
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