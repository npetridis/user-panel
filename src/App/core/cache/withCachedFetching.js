import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../HomePage/actions/userActions';
import { dataCachedSelector } from './selectors';

const withCachedFetching = Comp => {
  class WithCachedFetching extends React.Component {
    componentDidMount() {
      if (this.props.isCached) return;

      const { actions } = this.props;
      actions.getUsers();
      actions.getAllComments();
      actions.getAllPosts();
    }

    render() {
      return <Comp/>;
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    isCached: dataCachedSelector(state, ownProps),
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithCachedFetching);
};

export default withCachedFetching;
