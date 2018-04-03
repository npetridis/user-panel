import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

const { Author, Avatar, Content, Metadata, Text } = Comment;

const PostComment = ({ name, email, body }) => (
  <Comment>
    <Avatar
      as={Icon}
      name='user'
      color='grey'
      bordered
      inverted
    />
    <Content>
      <Author as='a'>{name}</Author>
      <Metadata>{email}</Metadata>
      <Text>{body}</Text>
    </Content>
  </Comment>
);

export default PostComment;