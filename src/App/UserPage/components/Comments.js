import React from 'react';
import { Comment, Header, Icon } from 'semantic-ui-react';

import PostComment from './PostComment';

const style = {
  display: 'inline-block',
};

class Comments extends React.Component {

  state = {
    commentsVisible: false,
  };

  toggleCommentsVisible = () => this.setState({ commentsVisible: !this.state.commentsVisible });

  render() {
    const { comments } = this.props;

    const postComments = comments.map(({ id, ...rest }) => (
      <PostComment
        key={id}
        {...rest}
      />));

    return (
      <Comment.Group collapsed={this.state.collapsed}>
        <Header
          as="h3"
          dividing={this.state.commentsVisible}
          onClick={this.toggleCommentsVisible}
        >
          <a>{`${comments.length || 0} Comments`}</a>
          {!this.state.commentsVisible
            ? <Icon style={style} link name='triangle down'/>
            : <Icon style={style} link name='triangle up'/>}
        </Header>
        {this.state.commentsVisible && postComments}
      </Comment.Group>
    );
  }
}

export default Comments;