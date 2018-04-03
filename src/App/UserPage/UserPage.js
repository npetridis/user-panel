import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Grid, Header, Radio, Segment } from 'semantic-ui-react';

import { Post, UserDetails } from './components';
import { getUserSelector, getPostCommentsSelector, getUserPostsSelector } from './selectors';
import withCachedFetching from '../core/cache/withCachedFetching';
import { getIsLoading } from '../core/commonSelectors';
import { Loader } from '../core/components/Loader';

class UserPage extends React.Component {

  state = {
    userDetailsVisible: false,
  };

  toggleUserDetails = () => this.setState({ userDetailsVisible: !this.state.userDetailsVisible });

  render() {
    const { user, userPosts, postComments, isLoading } = this.props;

    return (
      <Segment>
        <Header as='h3'>{user.username}</Header>
        <Grid
          columns={2}
          stackable
          reversed='mobile vertically'
        >
          <Loader active={isLoading}/>
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
              onChange={this.toggleUserDetails}
            />
            {this.state.userDetailsVisible && <UserDetails user={user}/>}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: getUserSelector(state, ownProps),
  userPosts: getUserPostsSelector(state, ownProps),
  postComments: getPostCommentsSelector(state, ownProps),
  isLoading: getIsLoading(state),
});

export default compose(
  withCachedFetching,
  withRouter,
  connect(mapStateToProps),
)(UserPage);
