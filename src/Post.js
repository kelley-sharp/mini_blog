import React, { Component } from 'react';
import { connect } from
class Post extends Component {
  render() {
    return (
      <li>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </li>
    );
  }
}

export default Post;
