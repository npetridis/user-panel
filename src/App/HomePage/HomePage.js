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
    title: 'Name',
    dataIndex: 'username',
    sorter: sortAlpha,
    render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
  },
  {
    title: 'Posts',
    dataIndex: 'postsCount',
    sorter: sortNumber,
  },
  {
    title: 'Comments/Posts',
    dataIndex: 'commentsPostsRatio',
    sorter: sortNumber,
  },
];

const HomePage = ({ userStats, isLoading }) => (
  <Card centered fluid>
    <Card.Content>
      <Card.Header>All Users</Card.Header>
      <DataTable
        rowKey='username'
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
