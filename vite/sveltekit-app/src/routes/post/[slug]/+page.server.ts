import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const postId = params.slug;
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    
    if (!response.ok) {
        error(404)
    }
    
    const post = await response.json();
    console.log(post)
    

    return {
        post
    };
};