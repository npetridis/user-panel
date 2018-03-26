const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = () => fetch(`${BASE_URL}/users`);

export const getUserPosts = userId => fetch(`${BASE_URL}/users/${userId}/posts`);

export const getAllComments = userId => fetch(`${BASE_URL}/comments`);

