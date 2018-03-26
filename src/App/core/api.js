const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = () => fetch(`${BASE_URL}/users`);

export const getUserPosts = userId => fetch(`${BASE_URL}/posts?userId=${userId}`);

export const getUserComments = userId => fetch(`${BASE_URL}/comments?userId=${userId}`);

