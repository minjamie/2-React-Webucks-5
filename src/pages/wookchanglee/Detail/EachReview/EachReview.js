import React from 'react';
import './EachReview.scss';

class EachReview extends React.Component {
  state = { isHeartFilled: false };
  render() {
    return (
      <div className="EachReview">
        <div className="core">
          <p className="username">{this.props.username}</p>
          <p className="string">{this.props.reviewContent}</p>
        </div>
        <div className="option">
          <div className="like">
            <i
              className={
                this.state.isHeartFilled ? 'fas fa-heart' : 'far fa-heart'
              }
              onClick={() =>
                this.setState({
                  isHeartFilled: !this.state.isHeartFilled,
                })
              }
            ></i>
          </div>
          <div
            className="delete"
            onClick={() => this.props.click(this.props.id)}
          >
            ❌
          </div>
        </div>
      </div>
    );
  }
}
export default EachReview;
