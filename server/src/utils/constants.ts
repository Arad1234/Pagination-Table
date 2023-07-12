import { StatusCodes } from "http-status-codes";

export const { BAD_REQUEST, OK, INTERNAL_SERVER_ERROR } = StatusCodes;

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const USERS_URL = `${BASE_URL}/users`;
export const POSTS_URL = `${BASE_URL}/posts`;
