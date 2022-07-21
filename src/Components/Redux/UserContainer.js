import { Component } from "react";
import { connect } from "react-redux";
import { fetchAPI } from "./actions";

import "../../App.css";

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const { comments } = this.props;
    console.log(comments);
    return (
      <div className="App-header">
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <ul>
              <li key={index}>{comment.email}</li>
            </ul>
          ))}
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchAPI()),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(UserContainer);
