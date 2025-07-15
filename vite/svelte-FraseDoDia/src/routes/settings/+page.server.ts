import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  
  
  
  return {
    
  };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({cookies, request}) =>{
    const data = await request.formData()

    const cookiePref = await data.get("prefered_lang") as string

    cookies.set('prefered_lang', cookiePref, {
      path: '/',
      maxAge: 60*60*24*30,
      httpOnly: true,
      sameSite: 'lax'
    })

    throw redirect(303, '/')
  }
}