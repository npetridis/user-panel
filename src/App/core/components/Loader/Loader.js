import React from 'react';
import { Dimmer, Loader as SemLoader } from 'semantic-ui-react';

const Loader = ({ active }) => (
  <Dimmer
    active={active}
    inverted
  >
    <SemLoader size='large'>Loading Data</SemLoader>
  </Dimmer>
);

export default Loader;