import React from 'react';
import { Card, Header } from 'semantic-ui-react';

import Comments from './Comments';

const Post = ({ title, body, comments }) =>
  <Card>
    <Header as='h2'>{title}</Header>
    {/*<h2>{title}</h2>*/}
    <p>{body}</p>
    <Comments comments={comments}/>
  </Card>;

export default Post;