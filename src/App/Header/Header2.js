import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => (
  <Menu stackable>
    <Menu.Item
      name='users'
      active={true}
      content='Users'
      onClick={() => {}}
    />
    <Menu.Item
      name='link'
      active={false}
      content='Link'
      onClick={() => {}}
    />
  </Menu>
);

export default Header;