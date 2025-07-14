import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
  
    const title = data.get("title")
    const body = data.get("corpo")

    //console.log("Titulo: " + title)
    //console.log("Corpo" + body)

    for(const [key, value] of data.entries()){
      console.log(`${key}: ${value}`)
    }

    //return data;
  }
}