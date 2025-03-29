import IBlogPost from "../interfaces/IBlogPost";

export default async function fetchBlogPosts(): Promise<IBlogPost[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: IBlogPost[] = await response.json();
    return data;
}
