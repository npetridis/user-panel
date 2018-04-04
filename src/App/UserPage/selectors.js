import { createSelector } from 'reselect';

import { getUsers, getAllPosts, getUserPosts, getAllComments } from '../core/commonSelectors';

const getUserId = (_, props) => props.match.params.userId;

const getPostCommentIds = state => state.comments.postComments || {};

const getUserPostIdsSelector = createSelector(
  [getUserPosts, getUserId],
  (userPosts, userId) => userPosts[userId] || []
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
  [getAllComments, getPostCommentIds],
  (allComments, postCommentIds) => Object.keys(postCommentIds)
    .reduce(
      (acc, postId) => Object.assign(
        {},
        acc,
        { [postId]: allComments.filter(comment => postCommentIds[postId].includes(comment.id)) },
      ),
      {},
    ),
);
