import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const postId = params.slug;
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    
    if (!response.ok) {
        throw new Error(`Post não encontrado`);
    }
    
    const post = await response.json();
    console.log(post)
    

    return {
        post
    };
};