import React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Post } from './components';

const UserPage = (props) => {
  console.log(props);
  console.log('posts', props.posts);
  const { username, userPosts, postComments } = props;

  return (
    <Card
      centered
      fluid
      header={username}
    >
      {userPosts.map(({ id, title, body }) => (
        <Post
          key={id}
          title={title}
          body={body}
          comments={postComments[id]}
        />
      ))}
    </Card>
  )
};

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.users.users.users.find(user => user.id.toString() === userId.toString());
  const allPosts = state.users.posts.posts;
  const userPostIds = state.users.posts.userPosts[userId];
  const allComments = state.users.comments.comments;
  const postCommentIds = state.users.comments.postComments;
  console.log('data', postCommentIds, Object.entries(postCommentIds));
  const postComments = Object.entries(postCommentIds).map(postCommentId => ({
    [postCommentId[0]]: allComments.filter(comment => postCommentId[1].includes(comment.id))
  }));

  console.log('postComments', postComments);

  return {
    username: user && user.username,
    userPosts: allPosts.filter(post => userPostIds.includes(post.id)),
    postComments,
  }
};


export default withRouter(connect(mapStateToProps)(UserPage));