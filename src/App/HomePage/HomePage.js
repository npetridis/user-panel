import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import * as actions from './actions/userActions';
import { DataTable } from './components';
import { sortAlpha, sortNumber } from '../core/util';

class HomePage extends React.Component {

  static columns = [
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

  constructor(props) {
    super(props);

    const { actions } = this.props;
    // actions.getUsers();
    actions.getAllComments();
    actions.getAllUsersData();
  }

  render() {
    const { userStats, isLoading } = this.props;

    return (
      <Card centered fluid>
        <Card.Content>
          <Card.Header>All Users</Card.Header>
          <DataTable
            keyField='username'
            columns={HomePage.columns}
            dataSource={userStats}
            loading={isLoading}
            sortable
          />
        </Card.Content>
      </Card>
    );
  }
}

const calcUserStatistics = state => state.users.users.users.map(user => ({
  id: user.id,
  username: user.username,
  postsCount: (state.users.posts.userPosts[user.id] || []).length,
  commentsPostsRatio: (state.users.comments.userEmailComments[user.email] || []).length,
}));

const mapStateToProps = state => ({
  userStats: calcUserStatistics(state),
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
