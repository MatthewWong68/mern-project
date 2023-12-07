// This api class is extends from actions.

import axios from 'axios';

const endpoint = 'http://localhost:5000/posts';

// Retrieve    ||    GET
export const fetchPosts = () => axios.get(endpoint);

// Create      ||    POST
export const createPost = (newPost) => axios.post(endpoint, newPost);

// Update      ||    PUT
export const updatePost = (id, updatedPost) => axios.patch(`${endpoint}/${id}`, updatedPost);
export const likePost = (id) => axios.patch(`${endpoint}/${id}/likePost`);

// Delete      ||    DELETE
export const deletePost = (id) => axios.delete(`${endpoint}/${id}`);
