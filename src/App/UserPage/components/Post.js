import React from 'react';
import { Card } from 'semantic-ui-react';

import Comments from './Comments';

const { Content, Description, Header } = Card;

const Post = ({ title, body, comments }) => (
  <Card fluid raised>
    <Content>
      <Header>{title}</Header>
      <Description>{body}</Description>
      <Comments comments={comments}/>
    </Content>
  </Card>
);

export default Post;