export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        city: string;
    };
    company: {
        name: string;
    };
}
export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
