import { createSelector } from 'reselect';

export const getUsers = state => state.users.users.users || [];

export const getAllPosts = state => state.users.posts.posts || [];

export const getAllComments = state => state.users.comments.comments || [];

export const getIsLoading = state => state.loader !== 0;

export const makeGetIsLoading = () => getIsLoading;
