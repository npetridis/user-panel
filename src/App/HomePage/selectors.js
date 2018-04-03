import { createSelector } from 'reselect';

import { getUsers } from '../core/commonSelectors';

const getUserPosts = state => state.users.posts.userPosts || [];

const getUserEmailComments = state => state.users.comments.userEmailComments || [];

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
