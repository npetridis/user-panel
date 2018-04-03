import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import withCachedFetching from '../core/cache/withCachedFetching';
import { sortAlpha, sortNumber } from '../core/util';
import { DataTable } from './components';
import { makeGetUserStatsSelector } from './selectors';
import { makeGetIsLoading } from '../core/commonSelectors';

const columns = [
  {
    name: 'Name',
    field: 'username',
    sorter: sortAlpha,
    render: record => <Link to={`user/${record.id}`}>{record.username}</Link>,
  },
  {
    name: 'Posts',
    field: 'postsCount',
    sorter: sortNumber,
  },
  {
    name: 'Comments/Posts',
    field: 'commentsPostsRatio',
    sorter: sortNumber,
  },
];

const HomePage = ({ userStats, isLoading }) => (
  <Card centered fluid>
    <Card.Content>
      <Card.Header>All Users</Card.Header>
      <DataTable
        keyField='username'
        columns={columns}
        dataSource={userStats}
        loading={isLoading}
        sortable
      />
    </Card.Content>
  </Card>
);

const makeMapStateToProps = () => {
  const getIsLoading = makeGetIsLoading();
  const getUserStatsSelector = makeGetUserStatsSelector();
  return (state, ownProps) => ({
    userStats: getUserStatsSelector(state, ownProps),
    isLoading: getIsLoading(state),
  })
};

export default compose(
  withCachedFetching,
  connect(makeMapStateToProps)
)(HomePage);
