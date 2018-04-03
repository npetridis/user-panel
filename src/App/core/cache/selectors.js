import { createSelector } from 'reselect';

import { getUsers, getAllPosts, getAllComments } from '../commonSelectors';

const usersCachedSelector = createSelector(
  [getUsers],
  users => users.length !== 0
);

const allPostsCachedSelector = createSelector(
  [getAllPosts],
  allPosts => allPosts.length !== 0
);

const allCommentsCachedSelector = createSelector(
  [getAllComments],
  allComments => allComments.length > 0
);

export const dataCachedSelector = createSelector(
  [usersCachedSelector, allPostsCachedSelector, allCommentsCachedSelector],
  (usersCached, allPostsCached, allCommentsCached) => usersCached && allPostsCached && allCommentsCached
);
