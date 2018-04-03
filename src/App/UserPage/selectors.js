import { createSelector } from 'reselect';

import { getUsers, getAllPosts, getUserPosts, getAllComments } from '../core/commonSelectors';

const getUserId = (_, props) => props.match.params.userId;

// const getUserPostIds = (state, props) => state.users.posts.userPosts[props.match.params.userId];

const getPostCommentIds = state => state.comments.postComments;

const getUserPostIdsSelector = createSelector(
  [getUserPosts, getUserId],
  (userPosts, userId) => (userPosts[userId] || []).map(post => post.id)
);

export const getUserSelector = createSelector(
  [getUserId, getUsers],
  (userId, users) => users.find(user => user.id.toString() === userId.toString()) || {}
);

export const getUserPostsSelector = createSelector(
  [getAllPosts, getUserPostIdsSelector],
  (allPosts, userPostIds) => allPosts.filter(post => userPostIds.includes(post.id))
);

export const getPostCommentsSelector = createSelector(
  [getPostCommentIds, getAllComments],
  (postCommentIds, allComments) => Object.entries(postCommentIds)
    .map(postCommentId => ({
      [postCommentId[0]]: allComments.filter(comment => postCommentId[1].map(p => p.id).includes(comment.id)),
    }))
);
