import type { PageServerLoad } from './$types';
import { phrases } from '$lib/data';

export const load: PageServerLoad = (async ({cookies}) => {
    
    const lang = cookies.get('prefered_lang') || 'en';
    const selectedPhrase = phrases.find(p => p.lang === lang) || phrases[0];
    
    return {phrase: selectedPhrase.phrase, currentLang: lang};
}) satisfies PageServerLoad;