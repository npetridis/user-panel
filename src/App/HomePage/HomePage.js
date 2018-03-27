import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Panel from 'react-bootstrap/lib/Panel';

import * as actions from './actions/userActions';
import Table from 'react-bootstrap/lib/Table';
import { DataTable } from './components';

class HomePage extends React.Component {

  static columns = [
    {
      dataField: 'username',
      text: 'Name',
      sort: true,
    }, {
      dataField: 'postsCount',
      text: 'Posts',
      sort: true,
    }, {
      dataField: 'commentsPostsRatio',
      text: 'Comments/Posts',
      sort: true,
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
    return (
      <div className="container">
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Users</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <DataTable
              keyField={'id'}
              columns={HomePage.columns}
              data={this.props.userStats}
            />
            {/*<Table responsive>*/}
            {/*<thead>*/}
            {/*<tr>*/}
            {/*<th>#</th>*/}
            {/*<th>Name</th>*/}
            {/*<th>Posts</th>*/}
            {/*<th>Comments/Posts</th>*/}
            {/*</tr>*/}
            {/*</thead>*/}
            {/*<tbody>*/}
            {/*{userStats.map((user, index) =>*/}
            {/*<tr key={user.id}>*/}
            {/*<td>{index}</td>*/}
            {/*<td>{user.username}</td>*/}
            {/*<td>{user.postsCount}</td>*/}
            {/*<td>{user.commentsPostsRatio}</td>*/}
            {/*</tr>*/}
            {/*)}*/}
            {/*</tbody>*/}
            {/*</Table>*/}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

const calcUserStatistics = state => state.users.users.map(user => ({
  id: user.id,
  username: user.username,
  postsCount: (state.posts.userPosts[user.id] || []).length,
  commentsPostsRatio: (state.comments.userEmailComments[user.email] || []).length,
}));

const mapStateToProps = state => ({
  userStats: calcUserStatistics(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);