import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Header, Radio, Segment } from 'semantic-ui-react';

import { Post, UserDetails } from './components';

class UserPage extends React.Component {

  state = {
    userDetailsVisible: false,
  };

  toggleUserDetails = () => this.setState({ userDetailsVisible: !this.state.userDetailsVisible });

  render() {
    const { user, userPosts, postComments } = this.props;

    return (
      <Segment>
        <Header as='h3'>{user.username}</Header>
        <Grid
          columns={2}
          stackable
          reversed='mobile vertically'
        >
          <Grid.Column width={12}>
            {userPosts.map(({ id, title, body }) => (
              <Post
                key={id}
                title={title}
                body={body}
                comments={Object.values(postComments[id])[0]}
              />
            ))}
          </Grid.Column>
          <Grid.Column width={4}>
            <Radio
              toggle
              label='User Details'
              onClick={this.toggleUserDetails}
            />
            {this.state.userDetailsVisible && <UserDetails user={user}/>}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.users.users.users.find(user => user.id.toString() === userId.toString()) || {};
  const allPosts = state.users.posts.posts;
  const userPostIds = state.users.posts.userPosts[userId];
  const allComments = state.users.comments.comments;
  const postCommentIds = state.users.comments.postComments;
  console.log('data', postCommentIds, Object.entries(postCommentIds));
  const postComments = Object.entries(postCommentIds).map(postCommentId => ({
    [postCommentId[0]]: allComments.filter(comment => postCommentId[1].map(p => p.id).includes(comment.id)),
  }));

  console.log('postComments', postComments);

  return {
    user,
    userPosts: allPosts.filter(post => userPostIds.includes(post.id)),
    postComments,
  };
};


export default withRouter(connect(mapStateToProps)(UserPage));