import { createClient } from '@insforge/sdk';

const baseUrl = import.meta.env.VITE_INSFORGE_BASE_URL || 'https://nztq5ms6.ap-southeast.insforge.app';
const anonKey = import.meta.env.VITE_INSFORGE_ANON_KEY;

if (!anonKey) {
  console.warn('InsForge Anon Key is missing. Database operations will fail.');
}

export const insforge = createClient({
  baseUrl,
  anonKey: anonKey || '',
});
