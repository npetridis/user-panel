import { createSelector } from 'reselect';

export const getUsers = state => state.users.users || [];

export const getAllPosts = state => state.posts.posts || [];

export const getUserPosts = state => state.posts.userPosts || [];

export const getAllComments = state => state.comments.comments || [];

export const getIsLoading = state => state.loader !== 0;

export const makeGetIsLoading = () => getIsLoading;
