import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <li>
        <hr />
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </li>
    );
  }
}

export default Post;
