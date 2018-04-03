import { createSelector } from 'reselect';

import { getUsers, getUserPosts } from '../core/commonSelectors';

const getUserEmailComments = state => state.comments.userEmailComments || [];

export const getUserStatsSelector = createSelector(
  [getUsers, getUserPosts, getUserEmailComments],
  (users, userPosts, userEmailComments) => users.map(user => ({
    id: user.id,
    username: user.username,
    postsCount: (userPosts[user.id] || []).length,
    commentsPostsRatio: (userEmailComments[user.email] || []).length,
  }))
);

export const makeGetUserStatsSelector = () => createSelector(
  [getUsers, getUserPosts, getUserEmailComments],
  (users, userPosts, userEmailComments) => users.map(user => ({
    id: user.id,
    username: user.username,
    postsCount: (userPosts[user.id] || []).length,
    commentsPostsRatio: (userEmailComments[user.email] || []).length,
  }))
);
