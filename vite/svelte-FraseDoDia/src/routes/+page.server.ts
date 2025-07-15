import type { PageServerLoad } from './$types';
import { phrases } from '$lib/data';

export const load = (async ({cookies}) => {
    
    const cookie = await cookies.get("prefered_lang")
    const phrase = phrases[cookie as keyof typeof phrases] || phrases[0]['en']
    
    return {phrase, currentLang: cookie};
}) satisfies PageServerLoad;