import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

import PostComment from './Comment';

class Comments extends React.Component {

  state = {
    commentsVisible: false,
  };

  toggleCommentsVisible = () => this.setState({ commentsVisible: !this.state.commentsVisible });

  render() {
    const { comments } = this.props;
    console.log('comments', comments);

    return (
      <Comment.Group collapsed={this.state.collapsed}>
        <Header
          as='h3'
          dividing
          onClick={this.toggleCommentsVisible}
        >
          {`${comments.length} Comments`}
        </Header>
        {comments.map(({ id, ...rest }) =>
          <PostComment
            key={id}
            {...rest}
          />
        )}
      </Comment.Group>
    );
  }
}

export default Comments;