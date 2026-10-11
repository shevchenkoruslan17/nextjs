import type { IUser, IPost, IComment } from "@/src/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getData<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error(`Помилка завантаження: ${endpoint}`);
    }
    return response.json() as Promise<T>;
}
export const getUsers = () => getData<IUser[]>("/users");

export const getUser = (id: string) =>
    getData<IUser>(`/users/${id}`);

export const getPosts = () => getData<IPost[]>("/posts");

export const getPost = (id: string) =>
    getData<IPost>(`/posts/${id}`);

export const getComments = () =>
    getData<IComment[]>("/comments");

export const getComment = (id: string) =>
    getData<IComment>(`/comments/${id}`);
