// import type { PageServerLoad } from './$types';

// export const load = (async ({fetch}) => {
//     let postsData: any[] = [];
//     let error: string | null = null;

//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//         if (!response.ok) {
//             throw new Error(`Erro ao buscar posts: ${response.status} ${response.statusText}`);
//         }

//         postsData = await response.json();

//     } catch (err: any) {
//         console.error("Erro na função load do servidor:", err);
//         error = err.message || "Ocorreu um erro desconhecido ao carregar os posts.";
//     }

//     return {
//         summaries: postsData.map(post => ({
//             id: post.id,
//             title: post.title
//         })),
//         error: error
//     };
// }) satisfies PageServerLoad;