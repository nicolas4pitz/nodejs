import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ cookies, request}) => {
    const data = await request.formData();
  
    console.log("foi")
    //return data;
  }
}