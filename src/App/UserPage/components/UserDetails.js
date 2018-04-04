import React from 'react';
import { Card } from 'semantic-ui-react';

const UserDetails = ({ user }) => (
  <Card fluid raised>
    <Card.Content>
      <Card.Header>{user.name}</Card.Header>
      <Card.Meta>{user.email}</Card.Meta>
      <Card.Description>
        {user.address && user.address.street}
        <br/>
        {user.address && user.address.suite}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default UserDetails;