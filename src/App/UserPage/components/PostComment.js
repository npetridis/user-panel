import React from 'react';
import { Comment } from 'semantic-ui-react';

const { Author, Content, Metadata, Text} = Comment;

const PostComment = ({ name, email, body }) => (
  <Comment>
    <Content>
      <Author>{name}</Author>
      <Metadata>{email}</Metadata>
      <Text>{body}</Text>
    </Content>
  </Comment>
);

export default PostComment;