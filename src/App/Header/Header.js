import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const Header = ({ history, location }) => (
  <Menu stackable>
    <Menu.Item
      name='users'
      active={location.pathname === '/'}
      content='All Users'
      onClick={() => history.push('/')}
    />
    {location.pathname.startsWith('/user/') && (
      <Menu.Item
        name='link'
        active={true}
        content={`User's Page`}
      />
    )}
  </Menu>
);

export default withRouter(Header);